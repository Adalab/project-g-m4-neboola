import React from 'react';
//import PropTypes from 'prop-types';


const Error = props => {
	const { error} = props;
	return(
		<React.Fragment>
      <div className="container_error container_ok">
		{/*<i className="icon_error"></i>*/}
        <p className={`hidden ${error === true ? 'text_error' : ''}`}>Oops! Don’t worry. Add the missing information or correct the incorrect information and try again.</p>
      </div>
		</React.Fragment>

	);
}

Error.propTypes = {

}

export default Error;