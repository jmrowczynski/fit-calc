import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeading = styled(Heading)`
    position: relative;
    margin-right: 30px;
    &::before {
        content: '';
        position: absolute;
        width: 110%;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.primary};
    }
`;

const StyledSpan = styled.span`
    color: ${({ theme }) => theme.darkgrey};
`;

const Header = ({ location: { pathname } }) => (
    <StyledWrapper>
        <StyledHeading size="m">
            Fit<StyledSpan>Calc</StyledSpan>
        </StyledHeading>
        {!pathname.includes('add') && <Input inputName="search" search />}
    </StyledWrapper>
);

Header.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default withRouter(Header);
