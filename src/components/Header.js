import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
	return(
		<React.Fragment>
      <div className="">
        <h1 className="">neboola</h1>
        <Link to="">
        <i class="fas fa-sign-out-alt"></i>
        </Link>
      </div>
		</React.Fragment>

	);
}

Header.propTypes = {

}
export default Header;
