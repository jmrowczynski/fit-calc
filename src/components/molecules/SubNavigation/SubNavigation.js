import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
`;

const StyledLink = styled.a`
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.dark};
    margin-right: 16px;
    &::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
    }
`;

const SubNavigation = ({ recipes }) => (
    <nav>
        <StyledList>
            {recipes && (
                <li>
                    <StyledLink href="/">Categories</StyledLink>
                </li>
            )}

            <li>
                <StyledLink href="/">Favorites</StyledLink>
            </li>
            <li>
                <StyledLink href="/">All</StyledLink>
            </li>
            <li>
                <StyledLink href="/">Add</StyledLink>
            </li>
        </StyledList>
    </nav>
);

SubNavigation.propTypes = {
    recipes: PropTypes.bool,
};

SubNavigation.defaultProps = {
    recipes: false,
};

export default SubNavigation;
