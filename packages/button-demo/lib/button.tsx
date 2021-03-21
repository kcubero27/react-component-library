import './button.css';

import { ButtonProps } from './button.types';

export const Button = ({
    primary = false,
    size = 'small',
    label,
}: ButtonProps) => {
    const mode = primary
        ? 'storybook-button-demo--primary'
        : 'storybook-button-demo--secondary';

    return (
        <button
            type='button'
            className={[
                'storybook-button-demo',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}>
            {label}
        </button>
    );
};
