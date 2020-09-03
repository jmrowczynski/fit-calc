import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.button`
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const StyledIcon = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.bright};
    ${({ plus }) =>
        plus &&
        css`
            &::before {
                content: '';
                width: 2px;
                height: 20px;
                background-color: ${({ theme }) => theme.bright};
            }
        `}
`;

const ButtonIcon = ({ plus, ...props }) => (
    <StyledWrapper aria-label={plus ? 'Add' : 'Remove'} {...props}>
        <StyledIcon plus={plus} />
    </StyledWrapper>
);

ButtonIcon.propTypes = {
    plus: PropTypes.bool,
};

ButtonIcon.defaultProps = {
    plus: false,
};

export default ButtonIcon;
