import React from 'react';
import Paragraph from './Paragraph';

export default {
    component: Paragraph,
    title: 'Atoms/Paragraph',
    argTypes: {
        children: { control: 'text' },
    },
};

const Template = args => <Paragraph {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: '200 kcal',
    size: 'xs',
    color: 'primary',
};

Basic.argTypes = {
    size: {
        control: {
            type: 'inline-radio',
            options: ['xxs', 'xs', 's', 'xl'],
        },
    },
    color: {
        control: {
            type: 'inline-radio',
            options: ['primary', 'bright', 'dark', 'darkgrey'],
        },
    },
};

export const PrimaryWatch = args => <Paragraph {...args} watch="primary" />;
PrimaryWatch.args = {
    children: '30min',
};
export const SecondaryWatch = args => <Paragraph {...args} watch="secondary" />;
SecondaryWatch.args = {
    children: '30min',
};
SecondaryWatch.parameters = {
    backgrounds: { default: 'dark' },
};
