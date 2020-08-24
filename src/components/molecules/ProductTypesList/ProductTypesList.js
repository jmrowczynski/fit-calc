import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    grid-row-gap: 10px;
`;

const StyledListItem = styled.li`
    position: relative;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${({ theme, color }) => theme[color]};
    }
`;

const ProductTypeList = () => (
    <StyledList>
        <StyledListItem color="others">Others</StyledListItem>
        <StyledListItem color="fat">Fat</StyledListItem>
        <StyledListItem color="carbohydrates">
            Carbohydrates
        </StyledListItem>
        <StyledListItem color="protein">Protein</StyledListItem>
    </StyledList>
);

export default ProductTypeList;
