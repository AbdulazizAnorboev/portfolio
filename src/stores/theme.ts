// theme.ts
import { writable, derived } from 'svelte/store';

type Theme = 'light' | 'dark';
const initial = (localStorage.getItem('theme') as Theme) || 'light';

export const theme = writable<Theme>(initial);

theme.subscribe((value) => {
  localStorage.setItem('theme', value);
  document.documentElement.classList.toggle('dark', value === 'dark');
});

export const isDark = derived(theme, ($theme) => $theme === 'dark');

export function toggleTheme() {
  theme.update((val) => (val === 'dark' ? 'light' : 'dark'));
}
