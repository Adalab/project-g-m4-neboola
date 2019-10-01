import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {

	const {email, getEmail, getFetch} = props;

	return(
		<React.Fragment>
      <header className="app_header">
          <h1 className="header_title">neboola</h1>
        </header>

      <main className="app_main">
		    <h2 className="main_title">Vacacioonero</h2>
        <label htmlFor="" className="label_login">
          <input type="mail" className="input_mail" 
						onChange={getEmail}
						value={email}/>
        </label>

        <Link to="/profile" className="profile_link">
        <button type="submit" className="btn_login" onClick={getFetch}>
					Enter
				</button>
        </Link>

		    <Error/>
      </main>
		</React.Fragment>

	);
}

Login.propTypes = {
	getEmail: PropTypes.func.isRequired,
	getFetch: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired
}

export default Login;