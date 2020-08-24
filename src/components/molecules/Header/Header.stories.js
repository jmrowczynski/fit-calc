import React from 'react';
import Header from './Header';

export default {
    component: Header,
    title: 'Molecules/Header',
    argTypes: {
        search: { control: 'boolean' },
    },
};

export const Basic = args => <Header {...args} />;
Basic.args = {
    search: false,
};
