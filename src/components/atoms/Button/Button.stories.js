import React from 'react';
import Button from './Button';

export default {
    component: Button,
    title: 'Atoms/Button',
    argTypes: {
        secondary: { control: 'boolean' },
    },
};

export const Basic = args => <Button {...args}>Log in</Button>;
Basic.args = {
    secondary: false,
};
