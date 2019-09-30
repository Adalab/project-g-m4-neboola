import React from 'react';
//import PropTypes from 'prop-types';
import Info from './Info';
import NewRequest from './NewRequest';
import { Link } from 'react-router-dom';

const Profile = props => {
	return(
		<React.Fragment>
      <header>
        <h1 className="">Neboola</h1>
      </header>
      <main>
        <div className="">
          <img src="" alt="" className=""/>
          <h2 className="">Judith Elliott</h2>
          <Link to=""><NewRequest/></Link>
        </div>
        <Link to=""><Info/></Link>
      </main>
		</React.Fragment>

	);
}

Profile.propTypes = {

}
export default Profile;