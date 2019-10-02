import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logout from './../images/logout.png';
import iconback from './../images/lelt-open-arrow.png';

const Header = props => {
  const {deleteLS} = props;
	return(
		<React.Fragment>
      <div className="header">
        <Link to="/profile" className="link profile_link">
        <img src={iconback} alt="Go back icon" className="header_icon-back"></img>
          <h1 className="header-logo">neboola</h1>
        </Link>
        <Link to="/" className="link" onClick={deleteLS}>
          <img src={logout} alt="Logout icon" className="prof_logout-icon"></img>
        </Link>

        <h1 className="prof_title">Neboola</h1>

      </div>
		</React.Fragment>

	);
}

Header.propTypes = {

}
export default Header;
