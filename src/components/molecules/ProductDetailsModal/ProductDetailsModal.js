import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import ListItem from 'components/atoms/ListItem/ListItem';

const appear = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    z-index: 101;
    background-color: rgba(255, 255, 255, 0.9);
    animation: ${appear} 0.3s both;
`;

const InnerWrapper = styled.article`
    padding: 17px;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 16px;
    width: 100%;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    ${({ theme }) => theme.mobileM`
        width: 80%;
    `};
    ${({ theme }) => theme.tablet`
        width: 60%;
    `};
    ${({ theme }) => theme.desktop`
        max-width: 500px;
        width: 50%;
    `};
`;

const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
`;

const StyledListItem = styled(ListItem)`
    margin-bottom: 10px;
`;

const StyledHeading = styled(Heading)`
    text-align: center;
    margin-bottom: 14px;
`;

const ProductDetailsModal = ({
    title,
    others,
    fat,
    carbohydrates,
    protein,
    modalCloseFn,
}) => (
    <StyledWrapper onClick={modalCloseFn}>
        <InnerWrapper>
            <StyledHeading color="dark" size="s" as="h2">
                {title} details
            </StyledHeading>
            <StyledList>
                <StyledListItem type="others">{others}g</StyledListItem>
                <StyledListItem type="fat">{fat}g</StyledListItem>
                <StyledListItem type="carbohydrates">
                    {carbohydrates}g
                </StyledListItem>
                <StyledListItem type="protein">{protein}g</StyledListItem>
            </StyledList>
        </InnerWrapper>
    </StyledWrapper>
);

ProductDetailsModal.propTypes = {
    title: PropTypes.string.isRequired,
    others: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    modalCloseFn: PropTypes.func.isRequired,
};

export default ProductDetailsModal;
