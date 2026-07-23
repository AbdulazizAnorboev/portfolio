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
    { id: 'experience', label: 'Experience', short: 'E' },
    { id: 'activity', label: 'Activities', short: 'A' },
    { id: 'education', label: 'Education', short: 'E' },
    { id: 'publication', label: 'Publications', short: 'P' },
    { id: 'contact', label: 'Contact', short: 'C' },
  ],
  resume: {
    title: 'Education & Experience',
    suptitle: 'Resume',
  },
  experience: {
    title: 'Where I Have Worked',
    suptitle: 'Experience',
  },
  education: {
    title: 'Academic Background',
    suptitle: 'Education',
  },
  activity: {
    title: 'Exhibitions & Conference Presentations',
    suptitle: 'Activities',
    exhibition: 'Exhibition',
    conference: 'Conference',
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
    { id: 'experience', label: '경력' },
    { id: 'activity', label: '대외활동' },
    { id: 'education', label: '학력' },
    { id: 'publication', label: '발표 및 논문' },
    { id: 'contact', label: '연락처' },
  ].map((item) => ({
    ...item,
    short: item.label.charAt(0).toUpperCase(),
  })),
  resume: {
    title: '박사 연구원 – 인공지능 및 컴퓨터 비전',
    suptitle: '이력서',
  },
  experience: {
    title: '경력',
    suptitle: '경력',
  },
  education: {
    title: '학력',
    suptitle: '학력',
  },
  activity: {
    title: '전시회 및 학회 발표',
    suptitle: '대외활동',
    exhibition: '전시회',
    conference: '학회 발표',
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

const uz = {
  about: {
    title: 'Men haqimda',
    suptitle: 'Men haqimda',
  },
  contact: {
    title: "Keling, bog'lanamiz",
    suptitle: "Bog'lanish",
    phone: 'Telefon',
    email: 'Email',
    address: 'Manzil',
    name: 'Ism',
    message: 'Xabar',
    send: 'Xabar yuborish',
    success: 'Rahmat! Xabaringiz yuborildi.',
    error: "Xatolik yuz berdi, iltimos qayta urinib ko'ring!",
    loading: 'Yuborilmoqda...',
  },
  nav: [
    { id: 'about', label: 'Men haqimda' },
    { id: 'techs', label: 'Texnologiyalar' },
    { id: 'portfolio', label: 'Loyihalar' },
    { id: 'experience', label: 'Tajriba' },
    { id: 'activity', label: 'Faoliyat' },
    { id: 'education', label: "Ta'lim" },
    { id: 'publication', label: 'Nashrlar' },
    { id: 'contact', label: 'Aloqa' },
  ].map((item) => ({
    ...item,
    short: item.label.charAt(0).toUpperCase(),
  })),
  resume: {
    title: "Ta'lim va Tajriba",
    suptitle: 'Rezyume',
  },
  experience: {
    title: 'Ish tajribam',
    suptitle: 'Tajriba',
  },
  education: {
    title: "Ta'lim",
    suptitle: "Ta'lim",
  },
  activity: {
    title: 'Ko‘rgazmalar va konferensiya taqdimotlari',
    suptitle: 'Faoliyat',
    exhibition: 'Ko‘rgazma',
    conference: 'Konferensiya',
  },
  techs: {
    title: 'Men ishlatadigan texnologiyalar',
    suptitle: 'Texnologiyalar',
  },
  portfolio: {
    title: 'Loyihalarim',
    suptitle: 'Loyihalar',
  },
  publication: {
    title: 'Nashrlarim',
    suptitle: 'Nashrlarim',
    view_paper: 'Maqolani ko‘rish',
  },
};

const ru = {
  about: {
    title: 'Обо мне',
    suptitle: 'Обо мне',
  },
  contact: {
    title: 'Свяжитесь со мной',
    suptitle: 'Контакты',
    phone: 'Телефон',
    email: 'Email',
    address: 'Адрес',
    name: 'Имя',
    message: 'Сообщение',
    send: 'Отправить сообщение',
    success: 'Спасибо! Ваше сообщение отправлено.',
    error: 'Что-то пошло не так, попробуйте ещё раз!',
    loading: 'Отправка...',
  },
  nav: [
    { id: 'about', label: 'Обо мне' },
    { id: 'techs', label: 'Технологии' },
    { id: 'portfolio', label: 'Проекты' },
    { id: 'experience', label: 'Опыт' },
    { id: 'activity', label: 'Деятельность' },
    { id: 'education', label: 'Образование' },
    { id: 'publication', label: 'Публикации' },
    { id: 'contact', label: 'Контакты' },
  ].map((item) => ({
    ...item,
    short: item.label.charAt(0).toUpperCase(),
  })),
  resume: {
    title: 'Образование и опыт',
    suptitle: 'Резюме',
  },
  experience: {
    title: 'Где я работал',
    suptitle: 'Опыт',
  },
  education: {
    title: 'Образование',
    suptitle: 'Образование',
  },
  activity: {
    title: 'Выставки и доклады на конференциях',
    suptitle: 'Деятельность',
    exhibition: 'Выставка',
    conference: 'Конференция',
  },
  techs: {
    title: 'Мои технологии',
    suptitle: 'Технологии',
  },
  portfolio: {
    title: 'Мои проекты',
    suptitle: 'Проекты',
  },
  publication: {
    title: 'Мои публикации',
    suptitle: 'Мои публикации',
    view_paper: 'Открыть статью',
  },
};

const dictionaries: Record<string, any> = { en, kr, uz, ru };

export function getSectionData(section: Section, lang: Lang) {
  const dict = dictionaries[lang] ?? en;
  // Fall back to English for any label not present in the chosen language.
  return dict[section] ?? en[section];
}
