import { screen, render } from '@testing-library/react';
import { Button } from '../lib/button';

test('renders learn react link', () => {
    render(<Button label='hello' />);
    const linkElement = screen.getByText('hello');
    expect(linkElement).toBeInTheDocument();
});
