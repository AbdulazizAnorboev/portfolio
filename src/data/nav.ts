const en = [
  { id: 'about', label: 'About Me', short: 'A' },
  { id: 'techs', label: 'Technologies', short: 'T' },
  { id: 'portfolio', label: 'Portfolio', short: 'P' },
  { id: 'publication', label: 'Publications', short: 'S' },
  { id: 'resume', label: 'Resume', short: 'R' },
  { id: 'contact', label: 'Contact', short: 'C' },
];

const kr = [
  { id: 'about', label: '소개', short: 'A' },
  { id: 'techs', label: '기술 스택', short: 'T' },
  { id: 'portfolio', label: '포트폴리오', short: 'P' },
  { id: 'publication', label: '발표 및 논문', short: 'S' },
  { id: 'resume', label: '이력서', short: 'R' },
  { id: 'contact', label: '연락처', short: 'C' },
];
export function getNavData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
