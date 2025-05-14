export enum Lang {
  en = 'en',
  kr = 'kr',
}

export enum Section {
  about = 'about',
  nav = 'nav',
  techs = 'techs',
  portfolio = 'portfolio',
  publication = 'publication',
  resume = 'resume',
  contact = 'contact',
}

export type User = {
  fullName: string;
  nickName: string;
  title: string;
  about: string;
  avatar: string;
  phone: string;
  email: string;
  cv: string;
};

export type Tech = { name: string; link: string; icon: string };

export type Publication = {
  title: string;
  authors: string;
  publisher: string;
  link: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  github: string;
  preview: string;
};

export type Education = {
  degree: string;
  school: Organization;
  date: string;
};

export type Experience = {
  title: string;
  description: string;
  company: Organization;
  date: string;
  points: string[];
};

type Organization = {
  name: string;
  logo: string;
  link: string;
};
