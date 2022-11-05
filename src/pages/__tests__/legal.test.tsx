import React from 'react';
import { render } from '@testing-library/react';
import LegalPage, { Head } from '../legal/';
import PrivacyPage, { Head as PrivacyHead } from '../legal/privacy-policy';
import Copyright, { Head as CopyHead } from '../legal/copyright';
import CookiesPage, { Head as CookieHead } from '../legal/cookie-policy';
import DisclaimerPage, { Head as DisclaiimerHead } from '../legal/disclaimer';
import TermsPage, { Head as TermsHead } from '../legal/terms-and-conditions';

describe('LegalPage', () => {
    // loop through the legal pages
    test.each([
        { title: 'Legal', element: <LegalPage /> },
        { title: 'Cookie Page', element: <CookiesPage /> },
        { title: 'Copyright Page', element: <Copyright /> },
        { title: 'Disclaimer Page', element: <DisclaimerPage /> },
        { title: 'Privacy Policy Page', element: <PrivacyPage /> },
        { title: 'Terms and Conditions Page', element: <TermsPage /> }
    ])('$title renders correctly', ({ title, element }) => {
        const { asFragment, getByText } = render(element);
        expect(asFragment()).toMatchSnapshot();
        expect(getByText(title)).toBeDefined();
    });

    test.each([
        { title: 'Legal', element: <Head /> },
        { title: 'Cookie Policy', element: <CookieHead /> },
        { title: 'Copyright', element: <CopyHead /> },
        { title: 'Disclaimer', element: <DisclaiimerHead /> },
        { title: 'Privacy Policy', element: <PrivacyHead /> },
        { title: 'Terms and Conditions', element: <TermsHead /> }
    ],)('$title header meta data renders correctly', ({ title, element }) => {
        const { asFragment, getByText } = render(element);
        expect(asFragment()).toMatchSnapshot();
        expect(getByText(title)).toBeDefined();
    });
});
