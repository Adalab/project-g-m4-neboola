import React from 'react';
//import PropTypes from 'prop-types';
import succesIcon from './../images/check.png';

const Error = props => {
	const { successNewRequest} = props;
	return(
		<React.Fragment>
      <div  className={`hidden container_success ${successNewRequest === true ? 'text_success' : ''}`}>
	  	<img className="success_icon" src={succesIcon} alt="Success icon"></img>
        <p >Request successfully registered</p>
      </div>
		</React.Fragment>

	);
}

Error.propTypes = {

}

export default Error;