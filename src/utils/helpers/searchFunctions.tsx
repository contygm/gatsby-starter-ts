/**
 * A function that takes all the posts of a specific type and filters them based on a search query
 *
 * @function filterWithSearchQuery
 * @param {GlossaryElements[] | IndexElements[]} unfilteredPosts - All posts
 * @param {string} searchQuery - what to base the search on
 * @return {GlossaryElements[] | IndexElements[]} - includes only posts that match the search query
 *
 * @see GlossaryElements
 * @see IndexElements
 */
export const filterWithSearchQuery = (
    unfilteredPosts: (GlossaryElements | IndexElements)[],
    searchQuery: string
) => {
    if (searchQuery !== '') {
        const filteredData = unfilteredPosts.filter((post: any) => {
            const { title } = post.frontmatter;

            if ('description' in post.frontmatter) {
                // wiki or blog post
                const { excerpt } = post;

                return (
                    // standardize data with .toLowerCase()
                    // return true if the searchQuery is in the description or title
                    excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            const { html } = post;

            return (
                // standardize data with .toLowerCase()
                // return true if the searchQuery is in the definition or title
                html.toLowerCase().includes(searchQuery.toLowerCase()) ||
                title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });

        return filteredData;
    }

    return unfilteredPosts;
};
