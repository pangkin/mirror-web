// ==================== 저장소 렌더링 ====================
function renderRepositories() {
  const grid = document.getElementById('repositoryGrid');
  grid.innerHTML = repositories.map(repo => `
    <div class="flex flex-col items-center gap-4 rounded-2xl p-6 border border-gray-200 bg-white text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
      <div class="distro-logo ${repo.logo}"></div>
      <h3 class="text-xl font-bold text-gray-900">${repo.name}</h3>
      <p class="text-gray-500 mb-4">${repo.description[currentLang]}</p>
      <div class="flex flex-col gap-2 mt-auto w-full">
        ${repo.mirrors.map(mirror => `
          <div>
            <a data-mirror-name="${mirror.name}"
              class="w-full inline-flex items-center justify-center rounded-lg h-10 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-200"
              href="${mirror.path}">${mirror.label}</a>
            <div class="sync-status-text"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  // 상태 업데이트
  updateMirrorStatuses();
}

// ==================== 미러 상태 관리 ====================
async function updateMirrorStatuses() {
  const mirrorLinks = document.querySelectorAll('a[data-mirror-name]');
  
  mirrorLinks.forEach(link => {
    const statusElement = link.nextElementSibling;
    if (statusElement && statusElement.classList.contains('sync-status-text')) {
      statusElement.innerHTML = `<span class="text-gray-400">${translations[currentLang]['status.checking']}</span>`;
    }
  });

  try {
    const [allStatuses, allSyncStatus, allDiskUsages] = await Promise.all([
      fetch('https://mirror.pangkin.com/asset/status.json').then(r => r.json()).catch(() => ({})),
      fetch('https://mirror.pangkin.com/dsync-status/api.php').then(r => r.json()).catch(() => ({ repositories: {} })),
      fetch('https://mirror.pangkin.com/diskusage/usage.json').then(r => r.json()).catch(() => ({}))
    ]);

    mirrorLinks.forEach(async link => {
      const mirrorName = link.dataset.mirrorName;
      const statusElement = link.nextElementSibling;

      if (!mirrorName || !statusElement || !statusElement.classList.contains('sync-status-text')) return;

      const status = await getMirrorStatusInfo(mirrorName, allStatuses, allSyncStatus);

      const colorMap = {
        green: 'text-green-600',
        yellow: 'text-yellow-600',
        red: 'text-red-600',
        gray: 'text-gray-500',
        orange: 'text-orange-600'
      };
      const statusColorClass = colorMap[status.state] || 'text-gray-500';

      let displayText = `<span class="${statusColorClass}">${status.text}</span>`;
      if (status.lastSync) {
        displayText += ` (${translations[currentLang]['status.sync']}: ${formatTime(status.lastSync)})`;
      }

      const diskUsage = allDiskUsages[mirrorName];
      if (diskUsage) {
        displayText += ` · ${diskUsage}`;
      }

      statusElement.innerHTML = displayText;
    });
  } catch (error) {
    console.error('Failed to update mirror statuses:', error);
  }
}

async function getMirrorStatusInfo(mirrorName, allStatuses, allSyncStatus) {
  const mirrorInfo = allStatuses[mirrorName];
  if (!mirrorInfo) {
    return { state: 'gray', text: translations[currentLang]['status.unknown'], lastSync: null };
  }

  let syncTime = new Date(mirrorInfo.lastSync);
  const now = new Date();
  const lagHours = (now - syncTime) / (1000 * 60 * 60);

  const syncStatus = allSyncStatus.repositories[mirrorName];

  let state = null;

  if (syncStatus === 2) {
    state = 'yellow';
    syncTime = null;
  } else if (syncStatus === 0) {
    state = 'red';
    syncTime = null;
  } else if (lagHours < 8) {
    state = 'green';
  } else if (lagHours < 12) {
    state = 'orange';
  } else {
    state = 'gray';
    syncTime = null;
  }

  const stateTextMap = {
    green: translations[currentLang]['status.latest'],
    yellow: translations[currentLang]['status.syncing'],
    orange: translations[currentLang]['status.outdated'],
    red: translations[currentLang]['status.failed'],
    gray: translations[currentLang]['status.unknown']
  };

  return {
    state: state || 'gray',
    text: stateTextMap[state] || translations[currentLang]['status.unknown'],
    lastSync: syncTime || null
  };
}

function formatTime(date) {
  if (!date) return '';

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Seoul',
    timeZoneName: 'short',
  };

  const formattedDate = new Intl.DateTimeFormat('sv-SE', options).format(date);
  return formattedDate.replace('GMT+9', 'KST');
}

// 주기적으로 상태 업데이트
function startStatusUpdater() {
  setInterval(updateMirrorStatuses, 60000);
}
