import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from '../lib/button';

describe('react-testing-library', () => {
    it('renders Greeting', () => {
        render(<Button label='Hello World' />);

        screen.getByText('Hello World');
    });

    it('changes greeting on click', () => {
        render(<Button label='Bonjour World' />);

        screen.getByText('Bonjour World');
    });
});
