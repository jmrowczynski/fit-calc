import styled from 'styled-components';

const Heading = styled.h1`
    color: ${({ theme, color }) =>
        theme[color] || theme.primary};
    font-size: ${({ theme, size }) =>
        theme.fontSize[size] || theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default Heading;
