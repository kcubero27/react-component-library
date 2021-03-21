import { screen, render } from '@testing-library/react';
import { Button } from '../src/button';

describe('react-testing-library', () => {
    it('renders Greeting', () => {
        render(<Button label='Hello World' />);

        const item = screen.getByText('Hello World');
        expect(item).toBeTruthy();
    });

    it('changes greeting on click', () => {
        render(<Button label='Bonjour World' />);

        const item = screen.getByText('Bonjour World');
        expect(item).toBeTruthy();
    });
});
