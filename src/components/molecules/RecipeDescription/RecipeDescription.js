import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import StyledListItem from 'components/atoms/ListItem/ListItem';

const StyledWrapper = styled.article`
    padding: 25px;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 16px;
`;

const StyledList = styled.ul`
    margin-bottom: 22px;
`;

const StyledItem = styled(StyledListItem)`
    padding-left: 14px;
    margin-bottom: 3px;
    &::before {
        width: 6px;
        height: 6px;
    }
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 10px;
`;

const RecipeDescription = () => (
    <StyledWrapper>
        <StyledHeading size="s">Ingredients</StyledHeading>
        <StyledList>
            <StyledItem>Tomato - 100g</StyledItem>
            <StyledItem>Onion - 50g</StyledItem>
            <StyledItem>Salt - 1/2 spoon</StyledItem>
            <StyledItem>Ham - 100g</StyledItem>
        </StyledList>
        <StyledHeading size="s">Preparation</StyledHeading>
        <Paragraph size="xxs" color="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            blandit, augue et luctus imperdiet, felis velit vestibulum mauris,
            in sagittis dolor mauris sed felis. Nam porta orci ac tincidunt
            auctor. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean gravida vestibulum nisl sed
            molestie. Sed.
        </Paragraph>
    </StyledWrapper>
);

export default RecipeDescription;
