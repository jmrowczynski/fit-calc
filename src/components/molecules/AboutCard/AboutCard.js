import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.article`
    padding: 17px 25px;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    min-height: 170px;
    display: flex;
    flex-direction: column;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 20px;
`;

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 20px;
`;

const AboutCard = () => (
    <StyledWrapper>
        <StyledHeading size="xs" color="dark" as="h2">
            Products
        </StyledHeading>
        <StyledParagraph size="xxs">
            Search for products, add them to your favorites and
            compose meals later on.
        </StyledParagraph>
    </StyledWrapper>
);

export default AboutCard;
