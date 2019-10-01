import React from 'react';
//import PropTypes from 'prop-types';
import Collapsibles from './Collapsibles';

const Past = props => {
	return(
		<React.Fragment>
      <p className="past_days">5 days past</p>
      <Collapsibles/>
		</React.Fragment>

	);
}

Past.propTypes = {

}

export default Past;