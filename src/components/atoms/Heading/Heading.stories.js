import React from 'react';
import { theme } from 'theme/mainTheme';
import Heading from './Heading';

export default {
    component: Heading,
    title: 'Atoms/Heading',
    argTypes: {
        children: { control: 'text' },
        size: {
            control: {
                type: 'inline-radio',
                options: ['xs', 's', 'm', 'xl', 'xxl'],
            },
        },
        color: {
            control: {
                type: 'inline-radio',
                options: ['primary', 'bright', 'dark'],
            },
        },
    },
};

const Template = args => <Heading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: 'FitCalc',
    size: 'm',
    color: theme.primary,
};
