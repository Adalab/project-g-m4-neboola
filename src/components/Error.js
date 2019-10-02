import React from 'react';
//import PropTypes from 'prop-types';
import errorIcon from './../images/error.svg';

const Error = props => {
	const { error} = props;
	return(
		<React.Fragment>
      <div  className={`hidden container_error ${error === true ? 'text_error' : ''}`}>
	  	<img className="error_icon" src={errorIcon} alt="Error icon"></img>
        <p >Oops! Don’t worry. Add the missing information or correct the incorrect information and try again.</p>
      </div>
		</React.Fragment>

	);
}

Error.propTypes = {

}

export default Error;