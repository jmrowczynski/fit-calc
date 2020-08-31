import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutView from './AboutView';
import ProductsView from './ProductsView';
import RecipesView from './RecipesView';
import ReportsView from './ReportsView';

const Root = () => (
    <Router>
        <MainTemplate>
            <Switch>
                <Route exact path="/" component={AboutView} />
                <Route path="/products" component={ProductsView} />
                <Route path="/recipes" component={RecipesView} />
                <Route path="/reports" component={ReportsView} />
            </Switch>
        </MainTemplate>
    </Router>
);

export default Root;
