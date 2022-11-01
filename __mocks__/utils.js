// mock useSiteMetadata hook
jest.mock('../src/hooks/useSiteMetadata', () => ({
    useSiteMetadata: () => ({
        title: `Starter`,
        siteUrl: `https://www.domain.com`,
        author: `Writer B. Author`,
        businessName: 'The Company',
        phone: '999-999-9999',
        email: 'email@email.com'
    })
}));