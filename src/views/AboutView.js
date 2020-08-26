import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AboutCardsList from 'components/organisms/AboutCardsList/AboutCardsList';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import backgroundImage from 'assets/images/backgrounds/about-image.jpeg';

const StyledWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    overflow: hidden;
    text-align: center;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        filter: blur(2px) brightness(1.2);
    }
`;

const InnerWrapper = styled.div`
    padding: 110px 40px;
`;

const StyledHeading = styled(Heading)`
    position: relative;
    margin-bottom: 70px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 3px;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
    }
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.darkgrey};
`;

const AboutView = () => (
    <>
        <StyledWrapper>
            <InnerWrapper>
                <StyledHeading size="xxl">
                    Fit<StyledSpan>Calc</StyledSpan>
                </StyledHeading>
                <Paragraph size="xl" color="darkgrey">
                    Calculate your calories and plan your diet with FitCalc.
                </Paragraph>
            </InnerWrapper>
        </StyledWrapper>
        <AboutCardsList />
        <ButtonIcon type="hamburger" />
    </>
);

export default AboutView;
