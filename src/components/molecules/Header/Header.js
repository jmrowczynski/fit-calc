import React from 'react';
import PropTypes from 'prop-types';
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

const Header = ({ search }) => (
    <StyledWrapper>
        <StyledHeading size="m">
            Fit<StyledSpan>Calc</StyledSpan>
        </StyledHeading>
        {search && <Input search />}
    </StyledWrapper>
);

Header.propTypes = {
    search: PropTypes.bool,
};

Header.defaultProps = {
    search: false,
};

export default Header;
