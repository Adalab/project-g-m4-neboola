import React from 'react';
//import PropTypes from 'prop-types';
import Collapsables from './Collapsables';
import Delete from './Delete';

const Requests = props => {
	return(
		<React.Fragment>
		  console.log('Hola')
      <Collapsables/>
      <Delete/>
		</React.Fragment>

	);
}

Requests.propTypes = {

}
export default Requests;