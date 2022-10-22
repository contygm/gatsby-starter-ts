import { graphql } from 'gatsby';

export const fragments = graphql`
	fragment SiteInfo on Site {
		siteMetadata {
			title,
			siteUrl,
			author,
			businessName,
			phone,
			email
		}
	}
`
