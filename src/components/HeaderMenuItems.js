import React from 'react';
import PropTypes from 'prop-types';

const HeaderMenuItems = ({ username }) => (
    <div className="HeaderMenuItems">
        <p className="HeaderMenuItems__UserName">{ username }</p>
        <p className="Header__Text">
            <span className="Header__Icon--User pe-7s-user" />
        </p>
    </div>
);

HeaderMenuItems.propTypes = {
    username: PropTypes.string.isRequired
};

export default HeaderMenuItems;
