import React from 'react';
import ItemCard from './ItemCard';

export default {
    component: ItemCard,
    title: 'Molecules/Item card',
    argTypes: {
        remove: { control: 'boolean' },
        favorite: { control: 'boolean' },
        cardType: {
            control: {
                type: 'inline-radio',
                options: ['product', 'meal'],
            },
        },
    },
};

export const Basic = args => <ItemCard {...args} />;
Basic.args = {
    remove: false,
    favorite: false,
    cardType: 'product',
};
