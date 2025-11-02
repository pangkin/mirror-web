// ==================== 언어 설정 및 번역 ====================
const translations = {
  ko: {
    'nav.notice': '공지사항',
    'hero.badge': '안정적인 오픈소스 미러 서비스',
    'hero.subtitle.text1': '개인이 운영하는 미러 서버로',
    'hero.subtitle.text2': '다양한 오픈소스 프로젝트',
    'hero.subtitle.text3': '를 제공합니다',
    'hero.btnStart': '시작하기',
    'hero.btnAbout': '프로젝트 소개',
    'hero.stat1': '가동 시간',
    'hero.stat2': '다운로드 속도',
    'hero.stat3': '우선 제공',
    'hero.stat3Value': '안정',
    'about.title': '프로젝트 소개',
    'about.description':
      'Pangkin Mirror는 오픈소스 커뮤니티를 지원하기 위해 운영하는 개인 미러 프로젝트입니다.',
    'about.feature1Title': '커뮤니티 주도',
    'about.feature1Desc':
      '각 오픈소스 커뮤니티에서 데이터를 제공·관리하며, 사용 책임은 최종 사용자에게 있습니다.',
    'about.feature2Title': '비영리 운영',
    'about.feature2Desc': '상업적 이익 없이 커뮤니티를 위해 운영합니다.',
    'about.feature3Title': '최신 상태 유지',
    'about.feature3Desc':
      '최신 상태를 유지하기 위해 매일 02시, 06시, 10시, 14시, 18시, 22시에 자동으로 동기화합니다.',
    'repos.title': '저장소 목록',
    'repos.description': '운영 중인 저장소 목록을 확인하세요.',
    'repos.serverAddress': '서버 주소:',
    'contact.title': '연락하기',
    'contact.description':
      '문의, 이슈 또는 제안 사항이 있으시면 언제든지 연락 주세요.',
    'contact.emailTitle': '이메일',
    'contact.emailDesc':
      '문의, 지원 또는 피드백은 이메일로 연락하실 수 있습니다.',
    'contact.githubDesc': '소스 코드, 이슈, 기여는 GitHub에서 확인하세요.',
    'rokfoss.title': 'ROKFOSS 프로젝트 참여',
    'rokfoss.description':
      'Pangkin Mirror는 ROKFOSS 프로젝트 참여 미러로서,<br class="hidden sm:block" />지역 오픈소스 리소스 확장에 기여합니다.',
    'rokfoss.button': 'ROKFOSS 알아보기',
    'notice.title': '공지사항',
    'status.latest': '최신',
    'status.syncing': '동기화 중...',
    'status.outdated': '오래됨',
    'status.failed': '동기화 실패',
    'status.unknown': '상태 알 수 없음',
    'status.checking': '상태 확인 중...',
    'status.sync': '동기화',
  },
  en: {
    'nav.notice': 'Notice',
    'hero.badge': 'Reliable Open Source Mirror Service',
    'hero.subtitle.text1': 'A personally-operated mirror server',
    'hero.subtitle.text2': 'various open-source projects',
    'hero.subtitle.text3': 'for',
    'hero.btnStart': 'Get Started',
    'hero.btnAbout': 'About Project',
    'hero.stat1': 'Uptime',
    'hero.stat2': 'Download Speed',
    'hero.stat3': 'Priority Service',
    'hero.stat3Value': 'Stable',
    'about.title': 'About the Project',
    'about.description':
      'Pangkin Mirror is a personal project operated on a best-effort basis to support the open-source community.',
    'about.feature1Title': 'Community-Driven',
    'about.feature1Desc':
      'All data is provided and managed by its respective open-source community. The responsibility for its use lies with the end-user.',
    'about.feature2Title': 'Non-Profit',
    'about.feature2Desc':
      "This service is operated entirely for the community's benefit, without any commercial interest.",
    'about.feature3Title': 'Always Up-to-Date',
    'about.feature3Desc':
      'To provide the latest data, mirrors are synchronized regularly at 02, 06, 10, 14, 18, 22 (KST).',
    'repos.title': 'Repositories',
    'repos.description':
      'A comprehensive list of our actively maintained repositories.',
    'repos.serverAddress': 'Server Address:',
    'contact.title': 'Contact',
    'contact.description':
      'For any inquiries, issues, or suggestions, please feel free to reach out.',
    'contact.emailTitle': 'Email',
    'contact.emailDesc':
      'For general inquiries, support, or feedback, you can reach me via email.',
    'contact.githubDesc':
      'Check out the project on GitHub for source code, issue tracking, and contributions.',
    'rokfoss.title': 'Proud Participant of ROKFOSS',
    'rokfoss.description':
      'Pangkin Mirror is proud to be a part of the ROKFOSS project,<br class="hidden sm:block" />contributing to the growth and availability of open-source resources in the region.',
    'rokfoss.button': 'Learn More about ROKFOSS',
    'notice.title': 'Notice',
    'status.latest': 'Latest',
    'status.syncing': 'Syncing...',
    'status.outdated': 'Outdated',
    'status.failed': 'Sync failed',
    'status.unknown': 'Status Unknown',
    'status.checking': 'Checking status...',
    'status.sync': 'Sync',
  },
};

// ==================== 저장소 데이터 ====================
const repositories = [
  {
    id: 'debian',
    name: 'Debian',
    logo: 'debian-logo',
    description: {
      ko: '안정적이고 신뢰할 수 있는 오픈소스 운영체제.',
      en: 'A stable and reliable open-source operating system.',
    },
    mirrors: [
      { name: 'debian', path: '/debian/', label: 'Debian' },
      { name: 'debian-cd', path: '/debian-cd/', label: 'Debian-CD' },
      {
        name: 'debian-security',
        path: '/debian-security/',
        label: 'Debian-Security',
      },
    ],
  },
  {
    id: 'opnsense',
    name: 'OPNsense',
    logo: 'opnsense-logo',
    description: {
      ko: '사용하기 쉬운 오픈소스 방화벽 및 라우팅 플랫폼.',
      en: 'An open-source, easy-to-use firewall and routing platform.',
    },
    mirrors: [{ name: 'opnsense', path: '/opnsense/', label: 'OPNsense' }],
  },
  {
    id: 'proxmox',
    name: 'Proxmox',
    logo: 'proxmox-logo',
    description: {
      ko: '서버 가상화 관리용 오픈소스 플랫폼.',
      en: 'An open-source server virtualization management platform.',
    },
    mirrors: [{ name: 'proxmox', path: '/proxmox/', label: 'Proxmox' }],
  },
  {
    id: 'rocky',
    name: 'Rocky Linux',
    logo: 'rocky-logo',
    description: {
      ko: '커뮤니티 지원 기반의 엔터프라이즈급 운영체제.',
      en: 'A community-supported, production-grade enterprise OS.',
    },
    mirrors: [
      { name: 'rocky', path: '/rocky/', label: 'Rocky' },
      { name: 'rocky-sigs', path: '/rocky-sigs/', label: 'Rocky-SIGs' },
    ],
  },
  {
    id: 'arch',
    name: 'Arch Linux',
    logo: 'arch-logo',
    description: {
      ko: '가볍고 유연한 배포판.',
      en: 'A simple, lightweight distribution.',
    },
    mirrors: [{ name: 'archlinux', path: '/archlinux/', label: 'Arch Linux' }],
  },
  {
    id: 'kali',
    name: 'Kali Linux',
    logo: 'arch-logo',
    description: {
      ko: '보안 작업을 위한 고급 리눅스 배포판.',
      en: 'An advanced Linux distribution for security tasks.',
    },
    mirrors: [
      { name: 'kali', path: '/kali/', label: 'Kali' },
      { name: 'kali-images', path: '/kali-images/', label: 'Kali-Images' },
    ],
  },
];

// ==================== 언어 감지 및 전환 ====================
let currentLang = 'ko';

function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const savedLang = localStorage.getItem('preferredLanguage');

  if (savedLang) {
    return savedLang;
  }

  return browserLang.startsWith('ko') ? 'ko' : 'en';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  // 번역 적용
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // 특정 요소는 innerHTML 사용 (줄바꿈 등 HTML 포함)
      if (key === 'rokfoss.description') {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // 히어로 서브타이틀 특별 처리 (강조 스타일 유지)
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) {
    if (lang === 'ko') {
      heroSubtitle.innerHTML = `
        ${translations.ko['hero.subtitle.text1']}<br class="hidden sm:block" />
        <span class="font-semibold text-gray-800">${translations.ko['hero.subtitle.text2']}</span>${translations.ko['hero.subtitle.text3']}
      `;
    } else {
      heroSubtitle.innerHTML = `
        ${translations.en['hero.subtitle.text1']}<br class="hidden sm:block" />
        ${translations.en['hero.subtitle.text3']} <span class="font-semibold text-gray-800">${translations.en['hero.subtitle.text2']}</span>
      `;
    }
  }

  // 언어 토글 버튼 텍스트 업데이트
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'ko' ? 'English' : '한국어';
  }

  // 저장소 카드 다시 렌더링
  if (typeof renderRepositories === 'function') {
    renderRepositories();
  }
}

// 언어 초기화
function initLanguage() {
  const detectedLang = detectLanguage();
  setLanguage(detectedLang);

  // 언어 토글 버튼 이벤트
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });
  }
}
