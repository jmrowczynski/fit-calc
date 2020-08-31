import React from 'react';
import NavTemplate from 'templates/NavTemplate';
import SubNavigation from 'components/molecules/SubNavigation/SubNavigation';
import { Switch, Route } from 'react-router-dom';

const RecipesView = () => (
    <NavTemplate>
        <h1>recipes</h1>
        <SubNavigation />
        <Switch>
            <Route path="/recipes/categories">recipes categories</Route>
            <Route path="/recipes/favorites">favorite recipes</Route>
            <Route path="/recipes/all">all recipes</Route>
            <Route path="/recipes/add">add recipe</Route>
        </Switch>
    </NavTemplate>
);

export default RecipesView;
