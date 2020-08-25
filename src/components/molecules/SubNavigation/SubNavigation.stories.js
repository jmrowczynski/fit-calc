import React from 'react';
import SubNavigation from './SubNavigation';

export default {
    component: SubNavigation,
    title: 'Molecules/Sub-navigation',
    argTypes: {
        recipes: { control: 'boolean' },
    },
};

export const Basic = args => <SubNavigation {...args} />;
Basic.args = {
    recipes: false,
};
