import React from 'react';
import styled from 'styled-components';
import ListItem from 'components/atoms/ListItem/ListItem';

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    grid-row-gap: 10px;
`;

const NutritionalCompositionList = () => (
    <StyledList>
        <ListItem type="others">Others</ListItem>
        <ListItem type="fat">Fat</ListItem>
        <ListItem type="carbohydrates">Carbohydrates</ListItem>
        <ListItem type="protein">Protein</ListItem>
    </StyledList>
);

export default NutritionalCompositionList;
