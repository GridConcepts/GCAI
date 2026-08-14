// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ai.gridconcepts.com.au',
	base: '/insights/',
	outDir: '../dist/insights',
	integrations: [mdx(), sitemap()],
});
