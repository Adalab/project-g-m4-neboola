import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Scheduled from './Scheduled';
import Past from './Past';
import Requests from './Requests';


const Info = props => {
	return(
		<React.Fragment>
      <Header/>
      <h2 className="info_title">request time</h2>
      <ul className="info_list">
        <li className="info_schedule">scheduled</li>
        <li className="info_past">past</li>
        <li className="info_requests">resquests</li>
      </ul>
		  <Scheduled/>
      <Past/>
      <Requests/>
		</React.Fragment>

	);
}

Info.propTypes = {

}
export default Info;