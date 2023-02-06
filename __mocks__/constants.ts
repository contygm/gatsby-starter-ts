const glossaryDefinitions: Array<GlossaryElements> = [
    {
        html: `<h3>Definition</h3><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            title: 'Air',
            letter: 'A',
            date: '3-2-2021',
            type: 'glossary',
            syllables: 'a·ban·don',
            phonetics: 'əˈbandən',
            similarWords: ['/blog/test', '/wiki/test'],
            relatedPosts: ['/blog/test1', '/wiki/test1'],
            tags: ['two', 'three']
        }
    },
    {
        html: `<h3>Definition</h3><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            title: 'Atom',
            letter: 'A',
            date: '3-2-2021',
            type: 'glossary',
            syllables: 'a·ban·don',
            phonetics: 'əˈbandən',
            similarWords: ['/blog/test', '/wiki/test'],
            relatedPosts: ['/blog/test1', '/wiki/test1'],
            tags: ['two', 'one']
        }
    },
    {
        html: `<h3>Definition</h3><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            title: 'Cloud',
            letter: 'C',
            date: '3-2-2021',
            type: 'glossary',
            syllables: 'a·ban·don',
            phonetics: 'əˈbandən',
            similarWords: ['/blog/test', '/wiki/test'],
            relatedPosts: ['/blog/test1', '/wiki/test1'],
            tags: ['two', 'one']
        }
    },
    {
        html: `<h3>Definition</h3><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            title: 'Moon',
            letter: 'M',
            date: '3-2-2021',
            type: 'glossary',
            syllables: 'a·ban·don',
            phonetics: 'əˈbandən',
            similarWords: ['/blog/test', '/wiki/test'],
            relatedPosts: ['/blog/test1', '/wiki/test1'],
            tags: ['two']
        }
    },
    {
        html: `<h3>Definition</h3><p>Lemon drops pastry danish halvah. Lemon drops pastry danish halvah.</p>`,
        frontmatter: {
            title: 'Window',
            letter: 'W',
            date: '3-2-2021',
            type: 'glossary',
            syllables: 'a·ban·don',
            phonetics: 'əˈbandən',
            similarWords: ['/blog/test', '/wiki/test1'],
            relatedPosts: ['/wiki/test', '/blog/test1'],
            tags: ['three']
        }
    }
];

const featuredOrRelatedPosts: Array<IndexElements> = [
    {
        excerpt:
            'Lemon drops pastry danish halvah. Chupa chups fruitcake powder...',
        fields: {
            slug: '/baking-tutorial/'
        },
        frontmatter: {
            title: 'Baking Tutorial',
            date: '3-2-2021',
            description: 'a baking tutorial',
            tags: ['two', 'three'],
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: {}
                }
            }
        }
    },
    {
        excerpt:
            'Cheesecake lemon drops Cheesecake lemon drops pastry danish halvah...',
        fields: {
            slug: '/ten-best-things/'
        },
        frontmatter: {
            title: '10 Best Things',
            description: 'a list of the ten best things',
            tags: ['one', 'two', 'three'],
            date: '2-2-2021',
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: {}
                }
            }
        }
    },
    {
        excerpt: 'Chupa chups fruitcake powder dessert gingerbread gummies...',
        fields: {
            slug: '/guide/'
        },
        frontmatter: {
            title: 'Guide',
            description: 'a guide',
            tags: ['one', 'two'],
            date: '5-2-2021',
            headerImage: {
                childImageSharp: {
                    gatsbyImageData: {}
                }
            }
        }
    }
];

const previous = {
    fields: {
        slug: '/post-before'
    },
    frontmatter: {
        title: 'Before - A Post About Things'
    }
};

const next = {
    fields: {
        slug: '/post-after'
    },
    frontmatter: {
        title: 'After - A Post About Things'
    }
};

const siteData: SiteMetadata = {
    title: `Starter`,
    siteUrl: `https://www.domain.com`,
    author: {
        name: `Writer B. Author`,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit'
    },
    businessName: 'The Company',
    phone: '999-999-9999',
    email: 'email@email.com',
    description: 'a super duper site!',
    image: '/nothing.png'
};

export {
    featuredOrRelatedPosts,
    previous,
    next,
    siteData,
    glossaryDefinitions
};
