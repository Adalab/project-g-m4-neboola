import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header';
import Date from './Date';
import Calendar from './Calendar';
import Error from './Error';

const NewRequest = props => {
   const {getDate, startDate, endDate, currentDay,comment,handleCreateRequest, deleteLS}=props
	return(
		<React.Fragment>
      <Header deleteLS={deleteLS}/>
      <h2 className="requests_time">Request free time</h2>
      <Date
      getDate={getDate}
      startDate={startDate}
      endDate={endDate}
      currentDay ={currentDay}
      />
      <Calendar/>
      <label htmlFor="" className="label_textarea">
      <textarea className="input-comment" type="text-area" placeholder="Comment" maxLength="140" name="comment" value={comment} onChange={getDate} rows="5" cols="33"/>
      </label>
      <button className="btn_request" onClick={handleCreateRequest}>Request holidays</button>
      <Error/>
		</React.Fragment>

	);
}

NewRequest.propTypes = {

}


export default NewRequest;