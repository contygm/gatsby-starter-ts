import React from 'react';
import { render } from '@testing-library/react';
import { PageHeader } from '../PageHeader';

describe('PageHeader', () => {
    it('default renders correctly', () => {
        const title = 'Starter';

        const { container, asFragment, getByText } = render(
            <PageHeader title={title} />
        );
        expect(asFragment()).toMatchSnapshot();

        expect(getByText(title)).toBeDefined();
        expect(
            container.getElementsByClassName('has-text-centered')
        ).toHaveLength(0);
    });

    it('centered renders correctly', () => {
        const title = 'Starter';

        const { container, asFragment, getByText } = render(
            <PageHeader
                title={title}
                alignCenter={true}
            />
        );
        expect(asFragment()).toMatchSnapshot();

        expect(getByText(title)).toBeDefined();
        expect(
            container.getElementsByClassName('has-text-centered')
        ).toHaveLength(1);
    });
});
