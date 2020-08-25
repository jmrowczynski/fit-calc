import React from 'react';
import ListItem from './ListItem';

export default {
    component: ListItem,
    title: 'Atoms/List item',
    argTypes: {
        children: { control: 'text' },
        type: {
            control: {
                type: 'inline-radio',
                options: ['others', 'fat', 'carbohydrates', 'protein'],
            },
        },
    },
};

export const Basic = args => <ListItem {...args} />;
Basic.args = {
    children: 'Others',
    type: 'others',
};
