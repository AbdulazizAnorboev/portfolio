const techs = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  {
    name: 'PyTorch',
    icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  },
  {
    name: 'Keras',
    icon: 'https://cdn.simpleicons.org/keras/D00000',
  },
  {
    name: 'Scikit-learn',
    icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
  },
  {
    name: 'Pandas',
    icon: 'https://pandas.pydata.org/static/img/pandas_secondary.svg',
  },
  { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
  { name: 'SciPy', icon: 'https://cdn.simpleicons.org/scipy/8CAAE6' },
  {
    name: 'XGBoost',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png',
  },
  {
    name: 'Matplotlib',
    icon: 'https://matplotlib.org/stable/_images/sphx_glr_logos2_003_2_00x.png',
  },
  {
    name: 'Seaborn',
    icon: 'https://seaborn.pydata.org/_images/logo-tall-lightbg.svg',
  },

  {
    name: 'PyTorch Lightning',
    icon: 'https://miro.medium.com/v2/resize:fit:2400/1*f1Y6xXw2Uab_-T2Q0C02Zg.png',
  },

  {
    name: 'Albumentations',
    icon: 'https://albumentations.ai/icon.svg',
  },
  {
    name: 'Torchvision',
    icon: 'https://torch.mlverse.org/css/images/hex/torchvision.png',
  },
  {
    name: 'FastAI',
    icon: 'https://lovellbrian.github.io/images/logo.png',
  },

  {
    name: 'Roboflow',
    icon: 'https://logosandtypes.com/wp-content/uploads/2025/02/roboflow.svg',
  },

  {
    name: 'Weights & Biases',
    icon: 'https://cdn.simpleicons.org/weightsandbiases/FFBE00',
  },
  {
    name: 'TensorBoard',
    icon: 'https://www.tensorflow.org/static/site-assets/images/project-logos/tensorboard-logo-social.png',
  },
  {
    name: 'ONNX',
    icon: 'https://cdn.simpleicons.org/onnx/005CED',
  },
  {
    name: 'TensorRT',
    icon: 'https://cdn.simpleicons.org/nvidia/76B900',
  },
  {
    name: 'Google Colab',
    icon: 'https://cdn.simpleicons.org/googlecolab/F9AB00',
  },
  {
    name: 'Jupyter',
    icon: 'https://cdn.simpleicons.org/jupyter/F37626',
  },

  {
    name: 'AWS EC2',
    icon: 'https://cdn.simpleicons.org/amazonec2/FF9900',
  },
  {
    name: 'OpenCV',
    icon: 'https://opencv.org/wp-content/uploads/2022/05/logo.png',
  },
  {
    name: 'Hugging Face',
    icon: 'https://cdn.simpleicons.org/huggingface/FFD21F',
  },
];

const en = {
  section: 'My Technologies',
  data: techs,
};

const kr = {
  section: '사용 기술',
  data: techs,
};

export function getTechsData(lang: 'en' | 'kr' = 'en') {
  return lang === 'kr' ? kr : en;
}
