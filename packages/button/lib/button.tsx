import './button.css';

import { ButtonProps } from './button.types';

export const Button = ({
    primary = false,
    size = 'small',
    label,
}: ButtonProps) => {
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';

    return (
        <button
            type='button'
            className={[
                'storybook-button',
                `storybook-button--${size}`,
                mode,
            ].join(' ')}>
            {label}
        </button>
    );
};
