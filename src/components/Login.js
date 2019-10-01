import React from 'react';
//import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {
	return(
		<div className="login_container">
      <header className="app_header">
          <h1 className="header_title">n</h1>
        </header>

      <main className="app_main">
		    <h2 className="main_title">Vacacioonero</h2>
        <label htmlFor="" className="label_login">
          <input type="mail" className="input_mail"/>
        </label>

        <Link to="/profile" className="profile_link">
        <button type="submit" className="btn_login">Enter</button>
        </Link>

		    <Error/>
      </main>
		</div>

	);
}

Login.propTypes = {

}

export default Login;