import React from 'react';
//import PropTypes from 'prop-types';
import errorIcon from './../images/error.png';

const Error = props => {
	const { errorNewRequest} = props;
	return(
		<React.Fragment>
      <div  className={`hidden container_error ${errorNewRequest === true ? 'text_error' : ''}`}>
	  	<img className="error_icon" src={errorIcon} alt="Error icon"></img>
        <p >Oops! Don’t worry. Add the missing information or correct the incorrect information and try again.</p>
      </div>
		</React.Fragment>

	);
}

Error.propTypes = {

}

export default Error;