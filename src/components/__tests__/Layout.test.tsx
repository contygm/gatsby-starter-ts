import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
    it('renders correctly', () => {
        const content = <p>Hello, goodbye.</p>;
        const { asFragment } = render(<Layout>{content}</Layout>);
        expect(asFragment()).toMatchSnapshot();
    });
});
