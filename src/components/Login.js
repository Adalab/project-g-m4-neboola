import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {
  const domain = '@neboola.co';

	const {email, getEmail, getFetch, error} = props;

	return(
		<div className="login_container">
      <header className="app_header">
          <h1 className="header_title">neboola</h1>
        </header>

      <main className="app_main">
        <div className="app_input-and-login">
		    <h2 className="main_title">Vacacioonero</h2>
        <form action="" className="form_login" id="login">
        <label htmlFor="input_mail" className="label_login">
          <input type="email" className="input_mail" 
            name="input_mail"
						onChange={getEmail}
						value={email}
            placeholder="Email"/>
        </label>
        <p className={`hidden  ${error === true ? 'message_error' : ''}`}>Error:[caption]</p>
        </form>
        <Link 
          to={(email.toLowerCase().includes(domain.toLowerCase()) && email.charAt(0) !== '@') ? '/profile' : '/'}  
				  className="profile_link">
          <input  type="submit" className="btn_login"
            form="login"
            value="Enter"
            onClick={getFetch}
          />
        </Link>
        </div>

		    <Error 
        email={email}
        domain={domain}
        error={error}/>
      </main>
		</div>

	);
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
	getEmail: PropTypes.func.isRequired,
  getFetch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
}

export default Login;