import React from 'react';
import styled from 'styled-components';
import NavTemplate from 'templates/NavTemplate';
import Heading from 'components/atoms/Heading/Heading';
import SubNavigation from 'components/molecules/SubNavigation/SubNavigation';
import RecipeCard from 'components/molecules/RecipeCard/RecipeCard';
import Header from 'components/molecules/Header/Header';
import { Switch, Route } from 'react-router-dom';
import breakfastImage from 'assets/images/backgrounds/breakfast.jpg';
import dinnerImage from 'assets/images/backgrounds/dinner.jpg';
import lunchImage from 'assets/images/backgrounds/lunch.jpg';
import supperImage from 'assets/images/backgrounds/supper.jpg';
import dessertImage from 'assets/images/backgrounds/dessert.jpg';
import RecipesForm from 'components/organisms/RecipesForm/RecipesForm';
import GridTemplate from 'templates/GridTemplate';

const categories = [
    {
        title: 'Breakfast',
        image: breakfastImage,
    },
    {
        title: 'Dinner',
        image: dinnerImage,
    },
    {
        title: 'Lunch',
        image: lunchImage,
    },
    {
        title: 'Supper',
        image: supperImage,
    },
    {
        title: 'Dessert',
        image: dessertImage,
    },
];

const StyledWrapper = styled.div`
    padding: 50px 25px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
    justify-items: stretch;
`;

const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 20px;
    ${({ theme }) => theme.mobileM`
        grid-gap: 25px;
    `};
`;

const StyledCategoryCard = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 16px;
    min-height: 150px;
    background-color: transparent;
    overflow: hidden;
    max-width: 600px;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(${({ image }) => image});
        background-size: cover;
        background-position: center;
        z-index: -1;
        filter: blur(2px) brightness(0.9);
    }
    ${({ theme }) => theme.mobileM`
        min-height: 170px;
    `};
`;

const RecipesView = () => (
    <NavTemplate>
        <StyledWrapper>
            <Header />
            <SubNavigation />
            <Switch>
                <Route
                    path="/recipes/categories"
                    render={() => (
                        <StyledList>
                            {categories.map(({ image, title }) => (
                                <StyledCategoryCard image={image} key={title}>
                                    <Heading color="bright">{title}</Heading>
                                </StyledCategoryCard>
                            ))}
                        </StyledList>
                    )}
                />
                <Route
                    path="/recipes/favorites"
                    render={() => (
                        <GridTemplate>
                            <RecipeCard isRemoveIcon image={dinnerImage} />
                            <RecipeCard isRemoveIcon image={dinnerImage} />
                        </GridTemplate>
                    )}
                />
                <Route
                    path="/recipes/all"
                    render={() => (
                        <GridTemplate>
                            <RecipeCard image={dinnerImage} />
                            <RecipeCard image={dinnerImage} />
                        </GridTemplate>
                    )}
                />
                <Route path="/recipes/add" component={RecipesForm} />
            </Switch>
        </StyledWrapper>
    </NavTemplate>
);

export default RecipesView;
