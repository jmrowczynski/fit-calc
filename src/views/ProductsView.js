import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavTemplate from 'templates/NavTemplate';
import { Switch, Route } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ItemCard from 'components/molecules/ItemCard/ItemCard';
import Header from 'components/molecules/Header/Header';
import SubNavigation from 'components/molecules/SubNavigation/SubNavigation';
import NutritionalCompositionList from 'components/molecules/NutritionalCompositionList/NutritionalCompositionList';
import ProductDetailsModal from 'components/molecules/ProductDetailsModal/ProductDetailsModal';
import ProductsForm from 'components/organisms/ProductsForm/ProductsForm';
import GridTemplate from 'templates/GridTemplate';

const favorites = [
    {
        title: 'Bread',
        id: 1,
        calories: 200,
        remove: true,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 50,
            fat: 25,
            carbohydrates: 15,
            protein: 10,
        },
    },
    {
        title: 'Banana',
        id: 2,
        calories: 250,
        remove: true,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 60,
            fat: 10,
            carbohydrates: 20,
            protein: 10,
        },
    },
    {
        title: 'Apple',
        id: 3,
        calories: 350,
        remove: true,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 50,
            fat: 20,
            carbohydrates: 20,
            protein: 10,
        },
    },
];

const all = [
    {
        title: 'Bread',
        id: 1,
        calories: 200,
        remove: false,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 50,
            fat: 25,
            carbohydrates: 15,
            protein: 10,
        },
    },
    {
        title: 'Chicken',
        id: 4,
        calories: 200,
        remove: false,
        favorite: false,
        cardType: 'product',
        stats: {
            others: 50,
            fat: 25,
            carbohydrates: 15,
            protein: 10,
        },
    },
    {
        title: 'Banana',
        id: 2,
        calories: 250,
        remove: false,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 60,
            fat: 10,
            carbohydrates: 20,
            protein: 10,
        },
    },
    {
        title: 'Apple',
        id: 3,
        calories: 350,
        remove: false,
        favorite: true,
        cardType: 'product',
        stats: {
            others: 50,
            fat: 20,
            carbohydrates: 20,
            protein: 10,
        },
    },
];

const StyledWrapper = styled.div`
    padding: 50px 25px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
    /* justify-items: stretch; */
`;

const StyledParagraph = styled(Paragraph)`
    text-align: center;
    max-width: 250px;
    margin: auto;
    margin-top: 56px;
`;

const ProductsView = ({ location: { pathname } }) => {
    const [isItemModalOpen, setIsItemModalOpen] = useState(false);
    const [itemDetails, setItemDetails] = useState({
        title: '',
        id: 0,
        stats: {
            others: 0,
            fat: 0,
            carbohydrates: 0,
            protein: 0,
        },
    });

    const openItemDetailsModal = (id, list) => {
        setItemDetails(...list.filter(item => item.id === id));
        setIsItemModalOpen(true);
    };

    const closeItemDetailsModal = () => {
        setIsItemModalOpen(false);
    };

    return (
        <NavTemplate>
            <StyledWrapper>
                <Header />
                <SubNavigation />
                {!pathname.includes('add') && <NutritionalCompositionList />}
                {isItemModalOpen && (
                    <ProductDetailsModal
                        modalCloseFn={closeItemDetailsModal}
                        title={itemDetails.title}
                        others={itemDetails.stats.others}
                        fat={itemDetails.stats.fat}
                        carbohydrates={itemDetails.stats.carbohydrates}
                        protein={itemDetails.stats.protein}
                    />
                )}
                <Switch>
                    <Route
                        path="/products/favorites"
                        render={() =>
                            favorites.length ? (
                                <GridTemplate>
                                    {favorites.map(
                                        ({
                                            title,
                                            calories,
                                            remove,
                                            favorite,
                                            cardType,
                                            id,
                                        }) => (
                                            <ItemCard
                                                id={id}
                                                modalOpenFn={() =>
                                                    openItemDetailsModal(
                                                        id,
                                                        favorites
                                                    )
                                                }
                                                title={title}
                                                calories={calories}
                                                isRemoveIcon={remove}
                                                favorite={favorite}
                                                cardType={cardType}
                                                key={id}
                                            />
                                        )
                                    )}
                                </GridTemplate>
                            ) : (
                                <StyledParagraph>
                                    No favorite products yet. Add some, please.
                                </StyledParagraph>
                            )
                        }
                    />
                    <Route
                        path="/products/all"
                        render={() => (
                            <GridTemplate>
                                {all.map(
                                    ({
                                        title,
                                        calories,
                                        remove,
                                        favorite,
                                        cardType,
                                        id,
                                    }) => (
                                        <ItemCard
                                            id={id}
                                            modalOpenFn={() =>
                                                openItemDetailsModal(id, all)
                                            }
                                            title={title}
                                            calories={calories}
                                            isRemoveIcon={remove}
                                            favorite={favorite}
                                            cardType={cardType}
                                            key={id}
                                        />
                                    )
                                )}
                            </GridTemplate>
                        )}
                    />
                    <Route path="/products/add" component={ProductsForm} />
                </Switch>
            </StyledWrapper>
        </NavTemplate>
    );
};

ProductsView.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default ProductsView;
