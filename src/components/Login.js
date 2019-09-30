import React from 'react';
//import PropTypes from 'prop-types';
import Profile from './Profile';
import Error from './Error';

const Login = props => {
	return(
		<React.Fragment>
		  <h2 className="">Vacaioonero</h2>
      <label htmlFor="">
      <input type="mail" className=""/>
      </label>
      <submit className=""></submit>
      
      <Profile/>
		  <Error/>
		</React.Fragment>

	);
}

Login.propTypes = {

}

export default Login;