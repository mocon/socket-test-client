import React from 'react';
import PropTypes from 'prop-types';

const MainContent = ({ children }) => (
    <div className="MainContent">
        { children }
    </div>
);

MainContent.propTypes = {
    children: PropTypes.node
};

export default MainContent;
