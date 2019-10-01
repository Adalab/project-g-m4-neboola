import React from 'react';
//import PropTypes from 'prop-types';
import Collapsibles from './Collapsibles';

const Scheduled = props => {
	return(
		<React.Fragment>
      <p className="scheduled_days">5 days Scheduled</p>
      <Collapsibles/>
		</React.Fragment>
	);
}

Scheduled.propTypes = {

}
export default Scheduled;