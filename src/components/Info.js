import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header';
import Scheduled from './Scheduled';
import Past from './Past';
import Requests from './Requests';

const Info = props => {
	return(
		<React.Fragment>

      <Header/>
		  <Scheduled/>
      <Past/>
      <Requests/>
		</React.Fragment>

	);
}

Info.propTypes = {

}
export default Info;