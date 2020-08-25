import React from 'react';
import backgroundImage from 'assets/images/backgrounds/dinner.jpg';
import RecipeCard from './RecipeCard';

export default {
    component: RecipeCard,
    title: 'Molecules/Recipe card',
};

export const Basic = () => <RecipeCard image={backgroundImage} />;
