import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { ReactComponent as HeartIcon } from 'assets/images/heart.svg';

const StyledWrapper = styled.div`
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
        background-color: ${({ theme }) => theme.primary};
    }
`;

const InnerWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 70%;
        width: 2px;
        background-color: ${({ theme }) => theme.primary};
    }
`;

const HeartWrapper = styled.div`
    padding-left: 20px;
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

const ItemCard = () => (
    <StyledWrapper>
        <InnerWrapper>
            <Heading as="h2" color="dark" size="s">
                Bread
            </Heading>
            <Paragraph color="darkgrey" size="xxs">
                200 kcal
            </Paragraph>
            <GraphWrapper>
                <Chart color="others" width="100%" />
                <Chart color="fat" width="60%" />
                <Chart color="carbohydrates" width="30%" />
                <Chart color="protein" width="50%" />
            </GraphWrapper>
        </InnerWrapper>
        <HeartWrapper>
            <HeartIcon />
        </HeartWrapper>
    </StyledWrapper>
);

export default ItemCard;
