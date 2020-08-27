import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledNav = styled.nav`
    position: fixed;
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

const StyledLink = styled.a`
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
                        <StyledLink href="/">Products</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/">Recipes</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="/">Reports</StyledLink>
                    </li>
                </>
            )}
            <li>
                <StyledLink href="/">About</StyledLink>
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
    logged: false,
    collapse: false,
};

export default MainNavigation;
