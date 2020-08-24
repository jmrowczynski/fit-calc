import styled, { css } from 'styled-components';
import dropIcon from 'assets/images/dropdown.svg';
import magnifierIcon from 'assets/images/magnifier.svg';

const Input = styled.input`
    padding: 10px 14px;
    background-color: ${({ theme }) => theme.lightgrey};
    color: ${({ theme }) => theme.dark};
    border: none;
    border-radius: 38px;
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
            color: ${({ theme }) => theme.primary};
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
            color: ${({ theme }) => theme.primary};
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
            color: ${({ theme }) => theme.primary};
            background-image: url(${magnifierIcon});
            background-repeat: no-repeat;
            background-position: 93% center;
        `}
`;

export default Input;
