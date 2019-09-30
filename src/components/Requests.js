import React from 'react';
//import PropTypes from 'prop-types';
import Collapsables from './Collapsables';
import Delete from './Delete';

const Requests = props => {
	return(
		<React.Fragment>
      <Collapsables/>
      <Delete/>
		</React.Fragment>

	);
}

Requests.propTypes = {

}
export default Requests;