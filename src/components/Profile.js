import React from 'react';
//import PropTypes from 'prop-types';
import Info from './Info';
import NewRequest from './NewRequest';

const Profile = props => {
	return(
		<React.Fragment>
		  console.log('Hola')
      <NewRequest/>
      <Info/>
		</React.Fragment>

	);
}

Profile.propTypes = {

}
export default Profile;