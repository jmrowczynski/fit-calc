import React from 'react';
import MainNavigation from './MainNavigation';

export default {
    component: MainNavigation,
    title: 'Molecules/Main navigation',
    argTypes: {
        logged: { control: 'boolean' },
    },
};

export const Basic = args => <MainNavigation {...args} />;
Basic.args = {
    logged: true,
};
