import styled from 'styled-components';

const GridTemplate = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    ${({ theme }) => theme.tablet`
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 30px;
    `};
    ${({ theme }) => theme.desktop`
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 40px;
    `};
`;

export default GridTemplate;
