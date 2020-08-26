import React from 'react';
import Input from './Input';

export default {
    component: Input,
    title: 'Atoms/Input',
};

export const Basic = () => <Input placeholder="Username" />;
export const Secondary = () => <Input secondary placeholder="Recipe name" />;
export const Textarea = () => (
    <Input
        name="description"
        textarea
        as="textarea"
        placeholder="Description"
    />
);
export const Select = () => (
    <Input select name="type" as="select" defaultValue="breakfast">
        <option value="breakfast">Breakfast</option>
        <option value="dinner">Dinner</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dessert">Dessert</option>
    </Input>
);
export const Search = () => <Input search />;

export const Date = () => <Input type="date" />;
