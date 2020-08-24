import styled, { css } from 'styled-components';
import watchIcon from 'assets/images/watch.svg';

const Paragraph = styled.p`
    color: ${({ theme, color }) =>
        theme[color] || theme.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme, size }) =>
        theme.fontSize[size] || theme.fontSize.xs};

    ${({ watch }) =>
        watch &&
        css`
            padding-left: 25px;
            background-image: url(${watchIcon});
            background-position: left center;
            background-repeat: no-repeat;
            background-size: auto 70%;
        `}
`;

export default Paragraph;
