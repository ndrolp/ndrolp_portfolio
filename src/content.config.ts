import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		path: z.string(),
		language: z.enum(['es', 'en']),
		summary: z.string(),
		date: z.string(),
		stack: z.array(z.string()),
		featured: z.boolean().default(false),
		privacyPolicy: z.boolean().default(false),
	}),
});

const privacyPolicies = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/privacy' }),
	schema: z.object({
		appName: z.string(),
		language: z.enum(['es', 'en']),
		title: z.string(),
		effectiveDate: z.string(),
		description: z.string(),
	}),
});

export const collections = { projects, privacyPolicies };
