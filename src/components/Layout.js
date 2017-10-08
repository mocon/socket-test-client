import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = ({ username, children }) => (
    <div className="App">
        <Sidebar />
        <MainContent>
            <Header
                username={ username }
            />
            <div className="MainContent__Body">
                { children }
            </div>
        </MainContent>
    </div>
);

Layout.propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Layout;
