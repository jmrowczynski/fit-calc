import React from 'react';
import NavTemplate from 'templates/NavTemplate';
import SubNavigation from 'components/molecules/SubNavigation/SubNavigation';
import { Switch, Route } from 'react-router-dom';

const ProductsView = () => (
    <NavTemplate>
        <h1>products</h1>
        <SubNavigation />
        <Switch>
            <Route path="/products/favorites">favorite products</Route>
            <Route path="/products/all">all products</Route>
            <Route path="/products/add">add product</Route>
        </Switch>
    </NavTemplate>
);

export default ProductsView;
