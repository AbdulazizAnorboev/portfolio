import { writable } from 'svelte/store';
import { sanityClient } from '../sanityClient.js';
import {
  educationQuery,
  experienceQuery,
  projectsQuery,
  publicationsQuery,
  techQuery,
  userQuery,
} from '../lib/queries.js';
import {
  Education,
  Experience,
  Project,
  Publication,
  Tech,
  User,
} from '../lib/types.js';

const user = writable<User | null>(null); // Initialize as null for clarity
const techs = writable<Tech[]>([]); // Initialize as null for clarity
const projects = writable<Project[]>([]); // Initialize as null for clarity
const publications = writable<Publication[]>([]); // Initialize as null for clarity
const education = writable<Education[]>([]); // Initialize as null for clarity
const experience = writable<Experience[]>([]); // Initialize as null for clarity
const loading = writable(true);

async function fetchData() {
  const [
    userResult,
    techsResult,
    projectsResult,
    publicationsResult,
    educationResult,
    experienceResult,
  ] = await Promise.all([
    sanityClient.fetch(userQuery),
    sanityClient.fetch(techQuery),
    sanityClient.fetch(projectsQuery),
    sanityClient.fetch(publicationsQuery),
    sanityClient.fetch(educationQuery),
    sanityClient.fetch(experienceQuery),
  ]);
  user.set(userResult);
  techs.set(techsResult);
  projects.set(projectsResult);
  publications.set(publicationsResult);
  education.set(educationResult);
  experience.set(experienceResult);
  loading.set(false);
}

export {
  user,
  techs,
  projects,
  publications,
  education,
  experience,
  loading,
  fetchData,
};
