import { writable } from 'svelte/store';

export type Lang = 'en' | 'kr';

// Read saved language from localStorage or fallback to 'en'
const savedLang = (localStorage.getItem('lang') as Lang) || 'en';

// Create the writable store
export const lang = writable<Lang>(savedLang);

// Persist to localStorage whenever it changes
lang.subscribe((value) => {
  localStorage.setItem('lang', value);
});

// Function to change language (optional: accept specific value or toggle)
export function changeLanguage(newLang?: Lang) {
  lang.update((current) => {
    const updated = newLang ? newLang : current === 'en' ? 'kr' : 'en';
    localStorage.setItem('lang', updated);
    return updated;
  });
}
