import React from 'react';
import { render } from '@testing-library/react';
import {Footer} from '../Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const author = 'Author';

        const { asFragment, getByTestId } = render(<Footer author={author} />);
        expect(asFragment()).toMatchSnapshot();
        expect(getByTestId('copyright').textContent).toContain(author);
    });
});
