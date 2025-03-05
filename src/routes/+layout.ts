// This file is needed for SvelteKit to work properly
// It can be used to load data or set up configurations for all pages

export const prerender = true;
export const ssr = false;

export function load() {
  return {
    // Any data you want available to all pages would go here
  };
}
