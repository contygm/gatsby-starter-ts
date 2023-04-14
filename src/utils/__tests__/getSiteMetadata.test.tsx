import { getSiteMetadata } from '../helpers/getSiteMetadata';
import * as gatsby from 'gatsby';

describe('getSiteMetadata', () => {
    it('return siteMetadata', () => {
        // NOTE: because this is mocked globally (__mocks__/gatsby), we give it a
        // different value to prove the hook will update based on siteMetadata
        const mock = jest.spyOn(gatsby, 'useStaticQuery');
        mock.mockImplementationOnce(() => ({
            site: {
                siteMetadata: {
                    title: `Different`,
                    siteUrl: `https://www.different.com`,
                    author: `Different B. Author`,
                    businessName: 'The Different Company',
                    phone: '111-111-1111',
                    email: 'different-email@email.com'
                }
            }
        }));

        const data = getSiteMetadata();
        expect(data).toMatchSnapshot();

        mock.mockRestore();
    });
});
