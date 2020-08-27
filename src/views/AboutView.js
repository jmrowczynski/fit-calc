import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import AboutCardsList from 'components/organisms/AboutCardsList/AboutCardsList';
import backgroundImage from 'assets/images/backgrounds/about-image.jpeg';
import NavTemplate from 'templates/NavTemplate';

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
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        filter: blur(2px) brightness(1.2);
        ${({ theme }) => theme.desktop`
            background-size: 70%;
        `};
    }
`;

const InnerWrapper = styled.div`
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform: translateY(-100px);
    ${({ theme }) => theme.tablet`
        transform: translateY(-200px);
    `};
`;

const StyledHeading = styled(Heading)`
    position: relative;
    margin-bottom: 40px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 3px;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
    }

    ${({ theme }) => theme.mobileM`
        margin-bottom: 70px;
        font-size: ${theme.fontSize.xxxl};
    `}
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.darkgrey};
`;

const StyledParagraph = styled(Paragraph)`
    ${({ theme }) => theme.mobileM`
        font-size: ${theme.fontSize.xl};
    `}
`;

const AboutView = () => (
    <NavTemplate>
        <StyledWrapper>
            <InnerWrapper>
                <StyledHeading size="xxl">
                    Fit<StyledSpan>Calc</StyledSpan>
                </StyledHeading>
                <StyledParagraph size="m" color="darkgrey">
                    Calculate your calories and plan your diet with FitCalc.
                </StyledParagraph>
            </InnerWrapper>
        </StyledWrapper>
        <AboutCardsList />
    </NavTemplate>
);

export default AboutView;
