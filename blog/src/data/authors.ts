export type Author = {
	name: string;
	role: string;
	photo: string;
};

/** Keyed by the `author` string used in each post's frontmatter. */
export const authors: Record<string, Author> = {
	'Val Melamed': {
		name: 'Val Melamed',
		role: 'Partner, Grid Concepts',
		photo: 'authors/val-melamed.jpg',
	},
	'Anton Sednin': {
		name: 'Anton Sednin',
		role: 'Campaign Management, Grid Concepts',
		photo: 'authors/anton-sednin.jpg',
	},
};

export function getAuthor(name: string): Author {
	return (
		authors[name] ?? {
			name,
			role: 'Grid Concepts',
			photo: 'authors/val-melamed.jpg',
		}
	);
}
