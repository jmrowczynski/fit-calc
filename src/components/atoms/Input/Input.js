import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import dropIcon from 'assets/images/icons/dropdown.svg';
import magnifierIcon from 'assets/images/icons/magnifier.svg';

const StyledLabel = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSize.xxxs};
    color: ${({ theme }) => theme.primary};
    text-indent: 10px;
`;

const StyledInput = styled.input`
    padding: 10px 14px;
    background-color: ${({ theme }) => theme.lightgrey};
    color: ${({ theme }) => theme.dark};
    border: none;
    border-radius: 38px;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    outline-color: ${({ theme }) => theme.primary};
    ::placeholder {
        font-size: ${({ theme }) => theme.fontSize.xxs};
        color: ${({ theme }) => theme.darkgrey};
    }

    ${({ secondary }) =>
        secondary &&
        css`
            background-color: ${({ theme }) => theme.secondary};
        `}

    ${({ textarea }) =>
        textarea &&
        css`
            background-color: ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.primary};
            border-radius: 16px;
            resize: none;
            padding: 19px 0 0 14px;
            min-height: 240px;
        `}
    ${({ select }) =>
        select &&
        css`
            background-color: ${({ theme }) => theme.secondary};
            background-image: url(${dropIcon});
            background-repeat: no-repeat;
            background-position: 93% center;
            appearance: none;
            padding-right: 50px;
        `}

    ${({ search }) =>
        search &&
        css`
            background-color: ${({ theme }) => theme.secondary};
            background-image: url(${magnifierIcon});
            background-repeat: no-repeat;
            background-position: 93% center;
            width: 100%;
            max-width: 220px;
        `}
`;

const Input = ({ inputName, labelText, ...props }) => (
    <div>
        <StyledInput id={inputName} {...props} />
        <StyledLabel htmlFor={inputName}>{labelText}</StyledLabel>
    </div>
);

Input.propTypes = {
    inputName: PropTypes.string,
    labelText: PropTypes.string,
};

Input.defaultProps = {
    inputName: '',
    labelText: '',
};

export default Input;
