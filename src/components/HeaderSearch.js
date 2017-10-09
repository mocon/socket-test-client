import React from 'react';
// import PropTypes from 'prop-types';

const HeaderSearch = () => (
    <div className="HeaderSearch">
        <p className="HeaderSearch__Text">
            <span className="Header__Icon--Search pe-7s-search" />
        </p>
        <p className="HeaderSearch__Text">Search</p>
    </div>
);

HeaderSearch.propTypes = {
    // children: PropTypes.node
};

export default HeaderSearch;
