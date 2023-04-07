/**
 * Type for the available CMS post types. These CMS post types are defined in `static/admin/config.yml`
 */
type PostType = 'blog' | 'wiki' | 'glossary';

/**
 * Basic post front matter
 * @category Post Types
 */
interface PostFrontmatter {
	/** post title */
	title: string;
	/** publish date */
	date: string;
	/** post description */
	description: string;
	/** array of related posts */
	related: Array<string>;
	/** array of post tags */
	tags: Array<string>;
	/** header image info */
	headerImage: {
		childImageSharp: {
			gatsbyImageData: GatsbyImageProps.image;
		};
	};
}

/**
 * front matter specific to wiki posts. Adds summary field
 * @category Post Types
 * @extends PostFrontmatter
 */
interface WikiPostFrontmatter extends PostFrontmatter {
	/** wiki post summary information */
	summary: Array<{
		field: string;
		value: string;
	}>;
}

/**
 * basic post elements
 * @category Post Types
*/
interface PostElements {
	/** post id */
	id: string;
	/** post excerpt */
	excerpt: string;
	/** post's full html content */
	html: string;
	/** post's ToC: comes from graphQL query */
	tableOfContents: string;
}

/**
 * Blog specific post elements. Specifies which front matter to use
 * @category Post Types
 * @extends PostElements
*/
interface BlogPostElements extends PostElements {
	/** blog specific front matter */
	frontmatter: PostFrontmatter;
}

/**
 * Wiki specific post elements. Specifies which front matter to use
 * @category Post Types
 * @extends PostElements
*/
interface WikiPostElements extends PostElements {
	/** wiki specific front matter */
	frontmatter: WikiPostFrontmatter;
}

/**
 * 'Neighbor' post information. These posts are intended to be linked as next/previous posts across the board. 
 * 
 * Next/Previous posts are intended to be next/previous based on publish date
 * @category Post Types
*/
interface NeighborPost {
	/** fields object with post info */
	fields: {
		/** relative url for post */
        slug: string;
    };
	/** post's frontmatter data */
	frontmatter: {
		/** post title */
        title: string;
    };
}