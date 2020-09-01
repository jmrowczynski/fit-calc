import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100vh;
    transition: transform 0.3s;
    transform: translateX(${({ collapse }) => (collapse ? '0' : '100%')});
`;

const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: ${({ logged }) => (logged ? '26px' : '60px')};
    justify-items: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.dark};
`;

const MainNavigation = ({ logged, collapse }) => (
    <StyledNav collapse={collapse}>
        <StyledList logged={logged}>
            {logged && (
                <>
                    <li>
                        <StyledLink to="/products/favorites">
                            Products
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/recipes/categories">
                            Recipes
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/reports">Reports</StyledLink>
                    </li>
                </>
            )}
            <li>
                <StyledLink to="/">About</StyledLink>
            </li>
            <li>
                <Button>Log {logged ? 'out' : 'in'}</Button>
            </li>
        </StyledList>
    </StyledNav>
);
MainNavigation.propTypes = {
    logged: PropTypes.bool,
    collapse: PropTypes.bool,
};

MainNavigation.defaultProps = {
    logged: true,
    collapse: false,
};

export default MainNavigation;
