import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
	return(
		<React.Fragment>
      <div className="header">
        <Link to="/profile" className="link profile_link">
          <i className="header_icon-back"></i>
          <h1 className="header-logo">neboola</h1>
        </Link>
        <Link to="/login" className="link logout_link">
          <i className="logout_icon"></i>
        </Link>
      </div>
		</React.Fragment>

	);
}

Header.propTypes = {

}
export default Header;
