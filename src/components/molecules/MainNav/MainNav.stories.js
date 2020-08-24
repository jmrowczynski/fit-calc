import React from 'react';
import MainNav from './MainNav';

export default {
    component: MainNav,
    title: 'Molecules/MainNav',
    argTypes: {
        logged: { control: 'boolean' },
    },
};

export const Basic = args => <MainNav {...args} />;
Basic.args = {
    logged: true,
};
