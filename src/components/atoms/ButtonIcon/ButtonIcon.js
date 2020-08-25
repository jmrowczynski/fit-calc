import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.button`
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: ${({ type }) => (type === 'hamburger' ? '66px' : '30px')};
    height: ${({ type }) => (type === 'hamburger' ? '66px' : '30px')};
    border-radius: 50%;
`;

const StyledIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.bright};

    ${({ type }) =>
        type === 'plus' &&
        css`
            &::before {
                content: '';
                width: 2px;
                height: 20px;
                background-color: ${({ theme }) => theme.bright};
            }
        `}

    ${({ type }) =>
        type === 'hamburger' &&
        css`
            width: 34px;
            &::before,
            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${({ theme }) => theme.bright};
            }
            &::before {
                transform: translateY(-9px);
            }
            &::after {
                transform: translateY(9px);
            }
        `}
`;

const ButtonIcon = ({ type }) => (
    <StyledWrapper type={type}>
        <StyledIcon type={type} />
    </StyledWrapper>
);

ButtonIcon.propTypes = {
    type: PropTypes.oneOf(['minus', 'plus', 'hamburger']).isRequired,
};

export default ButtonIcon;
