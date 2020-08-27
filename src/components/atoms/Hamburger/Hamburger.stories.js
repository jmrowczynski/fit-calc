import React from 'react';
import Hamburger from './Hamburger';

export default {
    component: Hamburger,
    title: 'Atoms/Hamburger',
    argTypes: {
        collapse: {
            control: 'boolean',
        },
    },
};

export const Basic = args => <Hamburger {...args} />;
Basic.args = {
    collapse: false,
};
