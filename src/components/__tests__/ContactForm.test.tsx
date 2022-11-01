import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});
