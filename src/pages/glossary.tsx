import React, { FunctionComponent } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { Layout, SEO, PageHeader } from '../components';
import PostPage from '../templates/post-page';

export interface GlossaryPageProps {
    site: SiteMetadata;
    allTags: {
        group: Array<{
            fieldValue: string;
            totalCount: number;
        }>;
    };
    index: {
        nodes: Array<GlossaryElements>;
        totalCount: number;
    };
    featured: {
        nodes: Array<GlossaryElements>;
    };
}

const GlossaryPage: FunctionComponent<PageProps<GlossaryPageProps>> = ({
    data: { index, allTags }
}: PageProps<GlossaryPageProps>) => {
    return (
        <Layout>
            <PageHeader
                title={`Glossary Index`}
                alignCenter={true}
            />
            {/* TODO: make PostPage have a glossary option, no read more*/}
            <PostPage
                // indexComponent={<GlossaryPage allDefinitions={index.nodes}/>}
                glossaryIndex={index}
                allTags={allTags}
                type={'glossary'}
            />
        </Layout>
    );
};

export default GlossaryPage;

export function Head({ data: { site } }: HeadProps<GlossaryPageProps>) {
    return <SEO title={site.title} />;
}

export const pageQuery = graphql`
    query GlossaryQuery {
        site: site {
            ...SiteMetadata
        }
        allTags: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "glossary" } } }
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        index: allMarkdownRemark(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { type: { eq: "glossary" } } }
        ) {
            nodes {
                ...GlossaryElements
            }
            totalCount
        }
        featured: allMarkdownRemark(
            limit: 5
            sort: { fields: [frontmatter___letter], order: ASC }
            filter: {
                frontmatter: {
                    type: { eq: "glossary" }
                    featured: { eq: true }
                }
            }
        ) {
            nodes {
                ...GlossaryElements
            }
        }
    }
`;
