import React from 'react';
import ButtonIcon from './ButtonIcon';

export default {
    component: ButtonIcon,
    title: 'Atoms/Button icon',
    argTypes: {
        plus: { control: 'boolean' },
    },
};

export const Basic = args => <ButtonIcon {...args} />;
Basic.args = {
    plus: false,
};
