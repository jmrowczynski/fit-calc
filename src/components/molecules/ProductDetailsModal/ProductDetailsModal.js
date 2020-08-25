import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import ListItem from 'components/atoms/ListItem/ListItem';

const StyledWrapper = styled.div`
    position: fixed;
    opacity: 0.8;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

const InnerWrapper = styled.article`
    padding: 17px;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 16px;
    flex: 1;
    max-width: 275px;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
`;

const StyledList = styled.ul`
    list-style: none;
`;

const StyledListItem = styled(ListItem)`
    margin-bottom: 10px;
`;

const StyledHeading = styled(Heading)`
    text-align: center;
    margin-bottom: 14px;
`;

const ProductDetailsModal = () => (
    <StyledWrapper>
        <InnerWrapper>
            <StyledHeading color="dark" size="s" as="h2">
                Bread details
            </StyledHeading>
            <StyledList>
                <StyledListItem type="others">68.39g</StyledListItem>
                <StyledListItem type="fat">0.33g</StyledListItem>
                <StyledListItem type="carbohydrates">20.24g</StyledListItem>
                <StyledListItem type="protein">1.09g</StyledListItem>
            </StyledList>
        </InnerWrapper>
    </StyledWrapper>
);

export default ProductDetailsModal;
