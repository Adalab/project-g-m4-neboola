import React from 'react';
//import PropTypes from 'prop-types';
import CollapsiblesRequests from './CollapsiblesRequests';

const Requests = props => {
	return(
		<React.Fragment>
      <p className="requests_days">5 days requested</p>
      <CollapsiblesRequests/>
		</React.Fragment>

	);
}

Requests.propTypes = {

}
export default Requests;