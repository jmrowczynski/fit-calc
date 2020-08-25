import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as HeartIcon } from 'assets/images/icons/heart.svg';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.article`
    position: relative;
    overflow: hidden;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
`;

const ContentWrapper = styled.div`
    position: relative;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    height: 125px;
    z-index: 1;
`;

const BlurredWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px) brightness(0.7);
    z-index: 0;
`;

const RecipeCard = ({ image }) => (
    <StyledWrapper>
        <ContentWrapper>
            <InnerWrapper>
                <Heading color="bright" size="s">
                    Spaghetti
                </Heading>
                <DescriptionWrapper>
                    <Paragraph watch="secondary">30min</Paragraph>
                    <Paragraph color="bright" size="xxs">
                        1200kcal
                    </Paragraph>
                </DescriptionWrapper>
            </InnerWrapper>
            <HeartIcon />
        </ContentWrapper>
        <BlurredWrapper image={image} />
    </StyledWrapper>
);

RecipeCard.propTypes = {
    image: PropTypes.string.isRequired,
};

export default RecipeCard;
