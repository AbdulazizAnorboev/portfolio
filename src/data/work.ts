const en = {
  title: 'My Projects',
  section: 'Portfolio',
  data: [
    {
      name: 'Tomato Disease Detection',
      description:
        'This project aims to detect and classify various diseases in tomatoes using the YOLOv5 deep learning model. It helps farmers by recognizing tomato diseases from images for early treatment.',
      image:
        'https://github.com/AbdulazizAnorboev/Tomato-Disease-Detection/raw/main/results/val_batch0_pred.jpg',
      source_code_link:
        'https://github.com/AbdulazizAnorboev/Tomato-Disease-Detection',
    },
    {
      name: 'Weld Defect Segmentation',
      description:
        'This project aims to detect weld defects using the Segformer model for semantic segmentation. The model is trained to identify and segment defects in weld images, facilitating automated quality control in welding processes.',
      image:
        'https://github.com/AbdulazizAnorboev/weld-defect-segmentation/raw/master/output_visualizations/visualization_0.png',
      source_code_link:
        'https://github.com/AbdulazizAnorboev/weld-defect-segmentation',
    },
  ],
};
const kr = {
  title: '프로젝트',
  section: '포트폴리오',
  data: [
    {
      name: '토마토 질병 탐지',
      description:
        '이 프로젝트는 YOLOv5 딥러닝 모델을 활용하여 토마토의 다양한 질병을 탐지하고 분류합니다. 이미지를 통해 질병을 인식하여 농부들이 조기에 치료할 수 있도록 도와줍니다.',
      image:
        'https://github.com/AbdulazizAnorboev/Tomato-Disease-Detection/raw/main/results/val_batch0_pred.jpg',
      source_code_link:
        'https://github.com/AbdulazizAnorboev/Tomato-Disease-Detection',
    },
    {
      name: '용접 결함 분할',
      description:
        '이 프로젝트는 Segformer 모델을 사용하여 용접 이미지에서 결함을 탐지하고 분할하는 것을 목표로 합니다. 모델은 용접 이미지 내 결함을 식별하고 분할하도록 학습되었으며, 용접 공정에서의 자동 품질 관리를 용이하게 합니다.',
      image:
        'https://github.com/AbdulazizAnorboev/weld-defect-segmentation/raw/master/output_visualizations/visualization_0.png',
      source_code_link:
        'https://github.com/AbdulazizAnorboev/weld-defect-segmentation',
    },
  ],
};

export function getWorkData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
