const data = {
  phone: '+82 10-9550-0715',
  email: 'abdulaziz.anorboyev@gmail.com',
  cv: '/assets/files/cv.pdf',
  address: '경북 경산시',
  github: 'https://github.com/AbdulazizAnorboev',
  linkedin: 'https://www.linkedin.com/in/abdulaziz-anorboev-386035196',
  socials: [
    {
      logo: '/assets/images/linkedin.svg',
      link: 'https://www.linkedin.com/in/abdulaziz-anorboev-386035196',
      alt: 'LinkedIn',
    },
    {
      logo: '/assets/images/github.svg',
      link: 'https://github.com/AbdulazizAnorboev',
      alt: 'GitHub',
    },
    {
      logo: '/assets/images/google-scholar.svg',
      link: 'https://scholar.google.com/citations?user=VBkqKcIAAAAJ&hl=en&oi=ao',
      alt: 'Google Scholar',
    },
    {
      logo: '/assets/images/kakaotalk.svg',
      link: 'http://qr.kakao.com/talk/U.ZeI82ERN8pj.Ka14yERI8XHyU-',
      alt: 'KakaoTalk',
    },
    {
      logo: '/assets/images/telegram.svg',
      link: 'https://t.me/abdulazizanorboev',
      alt: 'Telegram',
    },
  ],
};
const en = {
  section: 'Get in touch',
  title: "Let's Connect",
  phone: 'Phone',
  email: 'Email',
  address: 'Address',
  name: 'Name',
  message: 'Message',
  send: 'Send Message',
  success: 'Message sent successfully',
  error: 'Error sending message',
  loading: 'Sending...',
  data: data,
};

const kr = {
  section: '연락하기',
  title: '연락해 보세요',
  phone: '전화',
  email: '이메일',
  address: '주소',
  name: '이름',
  message: '메시지',
  send: '메시지 보내기',
  success: '메시지가 성공적으로 전송되었습니다',
  error: '메시지 전송 오류',
  loading: '전송 중...',
  data: data,
};

export function getContactData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
