import React from 'react';
import Paragraph from './Paragraph';

export default {
    component: Paragraph,
    title: 'Atoms/Paragraph',
    argTypes: {
        children: { control: 'text' },
        watch: { control: 'boolean' },
        size: {
            control: {
                type: 'inline-radio',
                options: ['xxs', 'xs', 's', 'xl'],
            },
        },
        color: {
            control: {
                type: 'inline-radio',
                options: [
                    'primary',
                    'bright',
                    'dark',
                    'darkgrey',
                ],
            },
        },
    },
};

const Template = args => <Paragraph {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: '200 kcal',
    watch: false,
    size: 'xs',
    color: 'primary',
};
