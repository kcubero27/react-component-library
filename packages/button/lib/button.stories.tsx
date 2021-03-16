import { Button } from './button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        primary: { control: { type: 'boolean' } },
        label: { control: { type: 'text' } },
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'medium', 'large'],
            },
        },
    },
};

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {
    label: 'hello',
    primary: true,
    size: 'small',
};
