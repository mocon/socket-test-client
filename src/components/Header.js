import React from 'react';
import PropTypes from 'prop-types';

import HeaderSearch from './HeaderSearch';
import HeaderMenuItems from './HeaderMenuItems';

const Header = ({ username }) => (
    <div className="Header">
        <HeaderSearch />
        <HeaderMenuItems
            username={ username }
        />
    </div>
);

Header.propTypes = {
    username: PropTypes.string.isRequired
};

export default Header;
