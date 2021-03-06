import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactComponent as HeartIcon } from 'assets/images/icons/heart.svg';
import { ReactComponent as RemoveIcon } from 'assets/images/icons/remove.svg';

const StyledWrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    padding: 17px 25px;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: ${({ theme, cardType }) => theme[cardType]};
    }
`;

const InnerWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    position: relative;
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 70%;
        width: 2px;
        background-color: ${({ theme, cardType }) => theme[cardType]};
    }
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
const GraphWrapper = styled.div`
    margin-top: 10px;
`;

const Chart = styled.div`
    height: 5px;
    width: ${({ width }) => width || '50px'};
    background-color: ${({ theme, color }) => theme[color]};
    margin-bottom: 6px;
`;

const ItemCard = ({
    isRemoveIcon,
    favorite,
    cardType,
    title,
    calories,
    modalOpenFn,
}) => (
    <StyledWrapper cardType={cardType}>
        <InnerWrapper cardType={cardType} onClick={modalOpenFn}>
            <Heading as="h2" color="dark" size="s">
                {title}
            </Heading>
            <Paragraph color="darkgrey" size="xxs">
                {calories}kcal
            </Paragraph>
            <GraphWrapper>
                <Chart color="others" width="100%" />
                <Chart color="fat" width="60%" />
                <Chart color="carbohydrates" width="30%" />
                <Chart color="protein" width="50%" />
            </GraphWrapper>
        </InnerWrapper>
        <IconWrapper favorite={favorite}>
            {isRemoveIcon ? <RemoveIcon /> : <HeartIcon />}
        </IconWrapper>
    </StyledWrapper>
);

ItemCard.propTypes = {
    isRemoveIcon: PropTypes.bool,
    favorite: PropTypes.bool,
    cardType: PropTypes.oneOf(['product', 'meal']).isRequired,
    title: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    modalOpenFn: PropTypes.func.isRequired,
};

ItemCard.defaultProps = {
    isRemoveIcon: false,
    favorite: false,
};

export default ItemCard;
