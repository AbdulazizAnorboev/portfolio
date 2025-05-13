// profileData.ts

const en = {
  section: 'About Me',
  title: 'ML Engineer',
  about: `Applied ML/DL engineer with a strong research background and hands-on experience in modern AI frameworks,
DL architectures, and end-to-end model development. Proven ability to build and deploy high-performance
solutions across domains such as healthcare, manufacturing, and agriculture. Actively exploring LLMs and NLP,
with a growing interest in leveraging foundation models for real-world applications. Passionate about developing
scalable, intelligent systems at the intersection of vision and language.`,
  avatar: '/assets/images/me.png',
};

const kr = {
  section: '소개',
  title: '머신러닝 엔지니어',
  about: `현장 경험과 연구 역량을 겸비한 머신러닝/딥러닝 엔지니어입니다. 최신 AI 프레임워크와 딥러닝 아키텍처를 활용하여
헬스케어, 제조, 농업 등 다양한 도메인에서 고성능 솔루션을 개발하고 배포한 경험이 있습니다. LLM과 NLP에 대한
지속적인 탐구를 통해 실제 문제 해결에 기여할 수 있는 기반 모델 활용 방안을 연구하고 있습니다. 비전과 언어가
결합된 지능형 시스템 개발에 열정을 가지고 있습니다.`,
  avatar: '/assets/images/me.png',
};

export function getAboutData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
