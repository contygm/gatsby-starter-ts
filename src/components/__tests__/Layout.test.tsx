import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

// jest.mock('../../hooks/useSiteMetadata', () => {
// 	useSiteMetadata: () => ({ author: `Writer B. Author` }),
// })

jest.mock('../../hooks/useSiteMetadata', () => ({
    useSiteMetadata: () => ({ author: `Writer B. Author` })
}));

describe('Layout', () => {
    it('renders correctly', () => {
        const content = <p>Hello, goodbye.</p>;
        const { asFragment } = render(<Layout>{content}</Layout>);
        expect(asFragment()).toMatchSnapshot();
    });
});
