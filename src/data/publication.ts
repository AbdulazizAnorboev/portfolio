// publications.ts

const publications_en = [
  {
    title:
      'Vision-Based Malware Detection: Integrating CNN and MobileNetV2 for Dynamic Cybersecurity Challenges',
    authors: 'J. Musaev, A. Anorboev, E. Usmanov, S. Anorboeva, D. Hwang',
    venue:
      'Asian Conference on Intelligent Information and Database Systems (ACIIDS), 2025',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-5884-8_18',
  },
  {
    title:
      'Optimized Epoch Selection Ensemble: Integrating Custom CNN and Fine-Tuned MobileNetV2 for Malimg Dataset Classification',
    authors: 'A. Musaev, A. Anorboev, J. M. Youn',
    venue: 'IEEE Access, 2025',
    link: 'https://ieeexplore.ieee.org/document/10909518',
  },
  {
    title:
      'Hybrid Convolutional Network Fusion: Enhanced Medical Image Classification with Dual-Pathway Learning',
    authors:
      'J. Musaev, A. Anorboev, S. Anorboeva, Y. S. Seo, N. T. Nguyen, D. Hwang',
    venue:
      'International Conference on Computational Collective Intelligence (ICCCI), 2024',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-70816-9_10',
  },
  {
    title:
      'Enhancing Classification of Parasite Microscopy Images Through Image Edge-Accentuating Preprocessing',
    authors:
      'A. Anorboev, J. Musaev, S. Anorboeva, Y. S. Seo, J. Hong, D. Hwang',
    venue: 'ACIIDS, 2024',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-4985-0_11',
  },
  {
    title:
      'Ensemble Techniques in Medical Imaging: Advancing Malaria Classification with Multi-Channel Decomposition',
    authors: 'S. Anorboeva, J. Musaev, A. Anorboev, Y. S. Seo',
    venue:
      'The Korean Institute of Communications and Information Sciences, 2023',
    link: '#',
  },
  {
    title:
      'MICL-UNet: Multi-Input Cross-Layer UNet Model for Agricultural Disease Classification',
    authors: 'A. Anorboev, J. Musaev, D. Hwang, Y. S. Seo',
    venue: 'IEEE Access 11, 2023',
    link: 'https://ieeexplore.ieee.org/abstract/document/10286835',
  },
  {
    title: 'Classifying Chicken-Made Food Images Using Enhanced MobileNetV2',
    authors: 'A. Anorboev, J. Musaev, S. Anorboeva, N. T. Nguyen, Y. S. Seo',
    venue: 'ICCCI, 2023',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-41774-0_14',
  },
  {
    title:
      'ICNN-Ensemble: An Improved Convolutional Neural Network Ensemble for Medical Image Classification',
    authors: 'J. Musaev, A. Anorboev, Y. S. Seo, N. T. Nguyen, D. Hwang',
    venue: 'IEEE Access 11, 2023',
    link: 'https://ieeexplore.ieee.org/abstract/document/10214220',
  },
  {
    title:
      'KeepNMax: Keep N Maximum of Epoch-Channel Ensemble Method for Deep Learning Models',
    authors: 'J. Musaev, A. Anorboev, N. T. Nguyen, D. Hwang',
    venue: 'IEEE Access 11, 2023',
    link: 'https://ieeexplore.ieee.org/abstract/document/10025707',
  },
  {
    title:
      'Ensemble of Top-3 Prediction with Image Pixel Interval Method Using Deep Learning',
    authors:
      'A. Anorboev, J. Musaev, S. Anorboeva, J. Hong, Y. S. Seo, N. T. Nguyen',
    venue: 'Computer Science and Information Systems, 2023',
    link: 'https://www.comsis.org/archive.php?show=ppr892-2302',
  },
  {
    title:
      'An Image Pixel Interval Power (IPIP) Method Using Deep Learning Classification Models',
    authors: 'A. Anorboev, J. Musaev, J. Hong, N. T. Nguyen, D. Hwang',
    venue: 'ACIIDS, 2022',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-21743-2_16',
  },
  {
    title:
      "ETop3PPE: Epoch's Top-Three Prediction Probability Ensemble Method for Deep Learning Classification Models",
    authors: 'J. Musaev, A. Anorboev, H. T. Phan, D. Hwang',
    venue: 'ACIIDS, 2022',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-21743-2_18',
  },
  {
    title:
      'SSTop3: Sole-Top-Three and Sum-Top-Three Class Prediction Ensemble Method Using Deep Learning Classification Models',
    authors: 'A. Anorboev, J. Musaev, J. Hong, N. T. Nguyen, D. Hwang',
    venue: 'ICCCI, 2022',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-16210-7_15',
  },
  {
    title:
      'Input Image Pixel Interval Method for Classification Using Transfer Learning',
    authors: 'A. Anorboev, M. Javokhir, J. Hong, N. T. Nguyen, D. Hwang',
    venue:
      'International Conference on Innovations in Intelligent Systems, 2022',
    link: 'https://ieeexplore.ieee.org/document/9894179',
  },
];

const en = {
  section: 'My Publications',
  view_paper: 'View Paper',
  data: publications_en,
};

const kr = {
  section: '논문 발표',
  view_paper: '논문 보기',
  data: publications_en,
};

export function getPublicationsData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
