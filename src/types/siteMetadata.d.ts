/**
 * An interface for site wide meta data. The metadata comes from the `gatsby-config.ts` file.
 * @category SiteMetadata
*/
interface SiteMetadata {
	/** site title */
	title: string;
	/** site url */
	siteUrl: string;
	/** an object containing author details */
	author: {
		/** name of the author */
		name: string;
		/** author blurb */
		description: string;
	};
	/** site description */
	description: string;
	/** official business name */
	businessName: string;
	/** business phone number */
	phone: string;
	/** business email */
	email: string;
	/** site icon relative location */
	image: string;
}