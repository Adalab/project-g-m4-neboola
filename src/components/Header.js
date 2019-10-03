import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logout from './../images/logout.png';
import leftArrow from './../images/left-open-arrow.png';

const Header = props => {
  const {deleteLS} = props;
	return(
		<>
      <div className="header">
        <Link to="/profile" className="link header_back-link">
          <img src={leftArrow} alt="Go-back icon" className="header_icon-back prof_logout-icon"></img>
          <h1 className="prof_title header_title">Neboola</h1>
        </Link>
        <Link to="/" className="link" onClick={deleteLS}>
          <img src={logout} alt="Logout icon" className="prof_logout-icon"></img>
        </Link>
      </div>
		</>
	);
}

export default Header;
