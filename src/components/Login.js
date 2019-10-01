import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {

	const {email, getEmail, getFetch} = props;

	return(
		<div className="login_container">
      <header className="app_header">
          <h1 className="header_title">neboola</h1>
        </header>

      <main className="app_main">
		    <h2 className="main_title">Vacacioonero</h2>
        <form action="" className="form_login" id="login">
        <label htmlFor="input_mail" className="label_login">
          <input type="email" className="input_mail" 
            name="input_mail"
						onChange={getEmail}
						value={email}
            placeholder="Email"/>
        </label>
        </form>
        <Link to="/profile" className="profile_link">
         <input  type="submit" className="btn_login"  
            form="login"
            value="Enter"
            onClick={getFetch}
          />
        </Link>

		    <Error/>
      </main>
		</div>

	);
}

Login.propTypes = {
	getEmail: PropTypes.func.isRequired,
	getFetch: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired
}

export default Login;