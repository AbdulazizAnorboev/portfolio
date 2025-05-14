import { Lang, Section } from './types';
// profileData.ts

const en = {
  about: {
    suptitle: 'About Me',
    title: 'About Me',
  },
  contact: {
    suptitle: 'Get in touch',
    title: "Let's Connect",
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    name: 'Name',
    message: 'Message',
    send: 'Send Message',
    success: 'Thank you! Your Message has been sent.',
    error: 'Something went wrong, Please try again!',
    loading: 'Sending...',
  },
  nav: [
    { id: 'about', label: 'About Me', short: 'A' },
    { id: 'techs', label: 'Technologies', short: 'T' },
    { id: 'portfolio', label: 'Portfolio', short: 'P' },
    { id: 'publication', label: 'Publications', short: 'P' },
    { id: 'resume', label: 'Resume', short: 'R' },
    { id: 'contact', label: 'Contact', short: 'C' },
  ],
  resume: {
    title: 'Education & Experience',
    suptitle: 'Resume',
  },
  techs: {
    title: 'My Technologies',
    suptitle: 'Technologies',
  },
  portfolio: {
    title: 'My Projects',
    suptitle: 'Projects',
  },
  publication: {
    title: 'My Publications',
    suptitle: 'My Publications',
    view_paper: 'View Paper',
  },
};

const kr = {
  about: {
    title: '소개',
    suptitle: '소개',
  },
  contact: {
    title: '연락해 보세요',
    suptitle: '연락하기',
    phone: '전화',
    email: '이메일',
    address: '주소',
    name: '이름',
    message: '메시지',
    send: '메시지 보내기',
    success: '메시지가 성공적으로 전송되었습니다',
    error: '메시지 전송 오류',
    loading: '전송 중...',
  },
  nav: [
    { id: 'about', label: '소개' },
    { id: 'techs', label: '기술 스택' },
    { id: 'portfolio', label: '포트폴리오' },
    { id: 'publication', label: '발표 및 논문' },
    { id: 'resume', label: '이력서' },
    { id: 'contact', label: '연락처' },
  ].map((item) => ({
    ...item,
    short: item.label.charAt(0).toUpperCase(),
  })),
  resume: {
    title: '박사 연구원 – 인공지능 및 컴퓨터 비전',
    suptitle: '이력서',
  },
  techs: {
    title: '사용 기술',
    suptitle: '사용 기술',
  },
  portfolio: {
    title: '프로젝트',
    suptitle: '포트폴리오',
  },
  publication: {
    title: '논문 발표',
    suptitle: '논문 발표',
    view_paper: '논문 보기',
  },
};

export function getSectionData(section: Section, lang: Lang) {
  if (lang == Lang.en) {
    return en[section];
  } else {
    return kr[section];
  }
}
