import React from 'react';
//import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {
	return(
		<React.Fragment>
      <header className="app_header">
          <h1 className="header_title">neboola</h1>
        </header>

      <main className="app_main">
		    <h2 className="main_title">Vacaioonero</h2>
        <label htmlFor="" className="label_login">
          <input type="mail" className="input_mail"/>
        </label>

        <Link to="/profile" className="profile_link">
        <submit className="btn_login"></submit>
        </Link>

		    <Error/>
      </main>
		</React.Fragment>

	);
}

Login.propTypes = {

}

export default Login;