import React from 'react';
//import PropTypes from 'prop-types';
import Profile from './Profile';
import Error from './Error';

const Login = props => {
	return(
		<React.Fragment>
		  console.log('Hola')

      <Profile/>
		  <Error/>
		</React.Fragment>

	);
}

Login.propTypes = {

}

export default Login;