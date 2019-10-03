import React from 'react';
import CollapsiblesRequests from './CollapsiblesRequests';

const Requests = props => {
	return (
		<React.Fragment>
			<p className="requests_days">5 days requested</p>
			<CollapsiblesRequests />
		</React.Fragment>
	);
}
export default Requests;