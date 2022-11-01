import React from 'react';
import { render } from '@testing-library/react';
import LegalPage from '../legal/';
import PrivacyPage from '../legal/privacy-policy';
import Copyright from '../legal/copyright';
import CookiesPage from '../legal/cookie-policy';
import DisclaimerPage from '../legal/disclaimer';
import TermsPage from '../legal/terms-and-conditions';

describe('LegalPage', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<LegalPage />);
        expect(asFragment()).toMatchSnapshot();
    });

    // loop through the legal pages
    test.each([
        { title: 'Cookie Page', element: <CookiesPage /> },
        { title: 'Copyright Page', element: <Copyright /> },
        { title: 'Disclaimer Page', element: <DisclaimerPage /> },
        { title: 'Privacy Policy Page', element: <PrivacyPage /> },
        { title: 'Terms and Conditions Page', element: <TermsPage /> }
    ])('legal pages', ({ title, element }) => {
        const { asFragment, getByText } = render(element);
        expect(asFragment()).toMatchSnapshot();
        expect(getByText(title)).toBeDefined();
    });
});
