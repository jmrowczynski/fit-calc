import styled, { css } from 'styled-components';
import primaryWatchIcon from 'assets/images/icons/watch.svg';
import secondaryWatchIcon from 'assets/images/icons/watch-secondary.svg';

const Paragraph = styled.p`
    color: ${({ theme, color }) => theme[color] || theme.primary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme, size }) =>
        theme.fontSize[size] || theme.fontSize.xs};

    ${({ watch }) =>
        watch &&
        css`
            color: ${({ theme }) =>
                watch === 'secondary' ? theme.bright : theme.darkgrey};
            font-size: ${({ theme }) =>
                watch === 'secondary' ? theme.fontSize.xxs : theme.fontSize.xs};
            padding-left: 25px;
            background-image: url(${watch === 'secondary'
                ? secondaryWatchIcon
                : primaryWatchIcon});
            background-position: left center;
            background-repeat: no-repeat;
        `}
`;

export default Paragraph;
