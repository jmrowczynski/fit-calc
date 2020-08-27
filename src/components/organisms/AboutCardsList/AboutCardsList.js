import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const content = [
    {
        title: 'Products',
        description:
            'Search for products, add them to your favorites and compose meals later on.',
    },
    {
        title: 'Recipes',
        description:
            'Know tasty and healthy recipes from around the world and shareyours. If you like any, add it to your favorites.',
    },
    {
        title: 'History',
        description: 'Place where you can view meals history and analyze data.',
    },
];

const StyledWrapper = styled.article`
    padding: 17px 25px;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    max-width: 420px;
`;

const GridWrapper = styled.div`
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 46px;
    justify-items: center;
    ${({ theme }) => theme.desktop`
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
    `};
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 20px;
`;

const AboutCard = () => (
    <GridWrapper>
        {content.map(({ title, description }) => (
            <StyledWrapper key={title}>
                <StyledHeading size="xs" color="dark" as="h2">
                    {title}
                </StyledHeading>
                <StyledParagraph size="xxs">{description}</StyledParagraph>
            </StyledWrapper>
        ))}
    </GridWrapper>
);

export default AboutCard;
