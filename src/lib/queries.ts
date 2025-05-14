export const techQuery = `*[_type == "technology"] | order(orderRank) {
      name,
      link,
      "icon": coalesce(icon.upload.asset->url, icon.url)
    }`;
export const userQuery = `*[_type == "user"][0]{
  fullname,
  nickname,
  title,
  about,
  address,
  phone,
  email,
  telegramId,
  telegramToken,
  "cv": coalesce(cv.file.asset->url, cv.url),
  "avatar": avatar.asset->url,
  socials[]{
    name,
    url,
    "icon": icon.asset->url
  }
}`;

export const projectsQuery = `*[_type == "project"] | order(orderRank) {
  "title": title,
  "description": description,
  "image": coalesce(image.upload.asset->url, image.url),
  github,
  preview
}`;
export const publicationsQuery = `*[_type == "publication"] | order(orderRank) {
  title,
  authors,
  publisher,
  link
}`;
export const educationQuery = `*[_type == "education"] | order(orderRank) {
  "degree": degree,
  school_name,
  school_link,
school_logo,
  "date": date
}`;

export const experienceQuery = `*[_type == "experience"] | order(orderRank) {
  "date": date,
  "title": title,
  company_name,
  company_link,
  company_logo,
  "description": description,
  "points": points
}`;

// export const techQuery = `*[_type == "technology"]{
//       name,
//       link,
//       "icon": coalesce(icon.upload.asset->url, icon.url)
//     }`;
