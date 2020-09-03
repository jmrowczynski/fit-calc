import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 500px;
    margin: auto;
    ${({ theme }) => theme.tablet`
        justify-content: center;
    `};
`;

const StyledLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.dark};
    font-size: ${({ theme }) => theme.fontSize.xxs};

    &.active {
        &::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${({ theme }) => theme.primary};
        }
    }
    ${({ theme }) => theme.mobileM`
        font-size: ${theme.fontSize.xs};
    `};

    ${({ theme }) => theme.tablet`
        margin-right: 35px;
    `};
`;

const SubNavigation = ({ match }) => (
    <nav>
        <StyledList>
            {match.path.includes('recipes') && (
                <li>
                    <StyledLink to="/recipes/categories">Categories</StyledLink>
                </li>
            )}

            <li>
                <StyledLink to={`${match.path}/favorites`}>
                    Favorites
                </StyledLink>
            </li>
            <li>
                <StyledLink to={`${match.path}/all`}>All</StyledLink>
            </li>
            <li>
                <StyledLink to={`${match.path}/add`}>Add</StyledLink>
            </li>
        </StyledList>
    </nav>
);

SubNavigation.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string,
    }).isRequired,
};

export default withRouter(SubNavigation);
