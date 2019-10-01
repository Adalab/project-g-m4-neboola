import React from 'react';
//import PropTypes from 'prop-types';

const Date = props => {
	return(
		<React.Fragment>
    <div className="dates_container">
      <div className="start-date_container">
        <p className="from-date"></p>
        <div className="from_container">
          <p className="start-date"></p>
          <img src="" alt="" className="start_icon"/>
        </div>
      </div>
      <img src="" alt="" className="dates_arrow"/>
      <div className="end-date_container">
        <p className="end-date"></p>
        <div className="end_container">
          <p className="end-date"></p>
          <img src="" alt="" className="end_icon"/>
        </div>
      </div>
    </div>
		</React.Fragment>

	);
}

Date.propTypes = {

}
export default Date;