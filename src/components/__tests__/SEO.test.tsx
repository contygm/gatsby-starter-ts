import { render } from '@testing-library/react';
import React from 'react';
import SEO from '../SEO';

describe('SEO Component', () => {
    it('renders correctly without', () => {
        const { asFragment } = render(<SEO />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly with arguments', () => {
        const content = <meta name="hello" />;
        const { asFragment } = render(
            <SEO
                title="Different Title"
                description="Different Description"
            >
                {content}
            </SEO>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
