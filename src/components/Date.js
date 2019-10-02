import React from 'react';
//import PropTypes from 'prop-types';

const Date = props => {
  const {getDate, startDate, endDate, currentDay}=props
	return(
		<React.Fragment>
    <div className="dates_container">
      <div className="start-date_container">
        <label htmlFor="" className="from-date_label">from</label>
          <input type="date" name="startDate"className="from-date_input" onChange={getDate} value={startDate} min={currentDay} required/>
        <div className="from_container">
          <img src="" alt="" className="start_icon"/>
        </div>
      </div>
      <img src="" alt="" className="dates_arrow"/>
      <div className="end-date_container">
        <label htmlFor="" className="end-date_label">to</label>
          <input type="date" name="endDate"className="end-date_input" onChange={getDate} value={endDate} required/>
        <div className="end_container">
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