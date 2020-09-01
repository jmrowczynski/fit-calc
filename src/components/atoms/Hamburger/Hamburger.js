import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburger = styled.button`
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 100;
`;

const StyledLines = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 2px;
    background-color: ${({ theme, collapse }) =>
        collapse ? 'transparent' : theme.bright};
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.bright};
        transition: transform 0.3s;
    }
    &::before {
        transform: ${({ collapse }) =>
            collapse ? 'rotate(-45deg)' : 'translateY(-9px)'};
    }
    &::after {
        transform: ${({ collapse }) =>
            collapse ? 'rotate(45deg)' : 'translateY(9px)'};
    }
`;

const Hamburger = ({ collapse, ...props }) => (
    <StyledHamburger {...props}>
        <StyledLines collapse={collapse} />
    </StyledHamburger>
);

Hamburger.propTypes = {
    collapse: PropTypes.bool,
};

Hamburger.defaultProps = {
    collapse: false,
};

export default Hamburger;
