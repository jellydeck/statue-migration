import { getSidebarData, getPageContent } from '$lib/cms/content-processor.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const slug = params.slug || '';
  const fullPath = `/docs/${slug}`;

  const sidebar = getSidebarData('docs');

  console.log("Sidebar", sidebar)

  const pageData = getPageContent(fullPath);

  if (!pageData) {
    throw error(404, 'Page not found');
  }

  return {
    sidebar,
    page: pageData,
    currentPath: fullPath
  };
}
