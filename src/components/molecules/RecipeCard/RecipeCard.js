import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ReactComponent as HeartIcon } from 'assets/images/icons/heart.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/icons/remove.svg';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.article`
    position: relative;
    overflow: hidden;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    border-radius: 16px;
    padding: 17px 25px;
    display: flex;
    height: 125px;
    background-color: ${({ theme, image }) =>
        image ? 'transparent' : theme.primary};
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-right: 10px;
    flex: 1;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconWrapper = styled.div`
    padding-left: 20px;
    ${({ favorite }) =>
        !favorite &&
        css`
            path {
                fill: ${({ theme }) => theme.dark};
            }
        `}
`;

const BlurredWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${({ image }) => image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px) brightness(0.7);
    z-index: 0;
`;

const RecipeCard = ({ image, isRemoveIcon, favorite }) => (
    <StyledWrapper image={image}>
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
            <IconWrapper favorite={favorite}>
                {isRemoveIcon ? <RemoveIcon /> : <HeartIcon />}
            </IconWrapper>
        </ContentWrapper>
        {image && <BlurredWrapper image={image} />}
    </StyledWrapper>
);

RecipeCard.propTypes = {
    isRemoveIcon: PropTypes.bool,
    favorite: PropTypes.bool,
    image: PropTypes.string,
};

RecipeCard.defaultProps = {
    isRemoveIcon: false,
    favorite: false,
    image: null,
};

export default RecipeCard;
