import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
    it('renders correctly', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('submit does nothing', () => {
        const { asFragment, getByText } = render(<ContactForm />);

        expect(asFragment()).toMatchSnapshot();
        fireEvent.click(getByText("Submit"));
        expect(asFragment()).toMatchSnapshot();
    });
});
