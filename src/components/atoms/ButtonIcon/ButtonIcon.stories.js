import React from 'react';
import ButtonIcon from './ButtonIcon';

export default {
    component: ButtonIcon,
    title: 'Atoms/Button icon',
    argTypes: {
        type: {
            control: {
                type: 'inline-radio',
                options: ['minus', 'plus', 'hamburger'],
            },
        },
    },
};

export const Basic = args => <ButtonIcon {...args} />;
Basic.args = {
    type: 'minus',
};
