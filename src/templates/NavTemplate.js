import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import MainNavigation from 'components/molecules/MainNavigation/MainNavigation';

const NavTemplate = ({ children }) => {
    const [collapse, setCollapse] = useState(false);

    const toggleCollapse = () => {
        setCollapse(prevState => !prevState);
    };

    return (
        <>
            {children}
            <MainNavigation collapse={collapse} />
            <Hamburger onClick={toggleCollapse} collapse={collapse} />
        </>
    );
};

NavTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default NavTemplate;
