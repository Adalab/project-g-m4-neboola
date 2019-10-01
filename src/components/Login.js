import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import { Link } from 'react-router-dom';

const Login = props => {
	const domain = 'neboola.co';
	const { email, getEmail } = props;
	return (
		<React.Fragment>
			<header className="app_header">
				<h1 className="header_title">neboola</h1>
			</header>

			<main className="app_main">
				<h2 className="main_title">Vacacioonero</h2>
				<form action="" className="form_login" id="login">
					<label htmlFor="" className="label_login">
						<input type="email" className="input_email"
							onChange={getEmail}
							required
							value={email} />
					</label>
				</form>

				{if(email.toLowerCase().includes(domain.toLowerCase())){
					<Link to="/profile" className="profile_link">
						<input type="submit" className="btn_login" form="login" value="enter" />
					</Link>
				} else {
					<input type="submit" className="btn_login" form="login" value="enter" />
				}

				{/* 				<Link to="/profile" className="profile_link">
					<input type="submit" className="btn_login" form="login" value="enter"/>
				</Link>
		    <Error/> */}
				}
      </main>
		</React.Fragment>
	);
}

Login.propTypes = {
	getEmail: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired
}

export default Login;