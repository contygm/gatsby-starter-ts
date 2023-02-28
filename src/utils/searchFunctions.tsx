export const filterWithSearchQuery = (
    unfilteredPosts: Array<GlossaryElements | IndexElements>,
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
