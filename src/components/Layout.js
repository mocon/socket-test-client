import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
    <div className="App">
        { children }
    </div>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
