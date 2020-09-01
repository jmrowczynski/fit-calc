import React from 'react';
import Input from './Input';

export default {
    component: Input,
    title: 'Atoms/Input',
};

export const Basic = () => (
    <Input labelText="Username" inputName="username" placeholder="Username" />
);
export const Secondary = () => (
    <Input
        labelText="Recipe name"
        inputName="recipe-name"
        secondary
        placeholder="Recipe name"
    />
);
export const Textarea = () => (
    <Input
        labelText="Recipe description"
        inputName="description"
        name="description"
        textarea
        as="textarea"
        placeholder="Description"
    />
);
export const Select = () => (
    <Input
        labelText="Product type"
        select
        name="type"
        as="select"
        defaultValue="breakfast"
    >
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dessert">Dessert</option>
    </Input>
);
export const Search = () => <Input search />;

export const Date = () => (
    <Input labelText="Date" inputName="date" type="date" />
);
