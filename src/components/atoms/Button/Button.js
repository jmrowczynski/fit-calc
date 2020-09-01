import styled, { css } from 'styled-components';

const Button = styled.button`
    width: 262px;
    height: 64px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bright};
    border: none;
    border-radius: 38px;
    box-shadow: 8px 6px 16px -14px rgba(0, 0, 0, 0.75);
    font-size: ${({ theme }) => theme.fontSize.l};
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    ${({ secondary }) =>
        secondary &&
        css`
            width: 125px;
            height: 36px;
            font-size: ${({ theme }) => theme.fontSize.xs};
        `}
`;

export default Button;
