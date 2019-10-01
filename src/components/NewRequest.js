import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header';
import Date from './Date';
import Calendar from './Calendar';
import Error from './Error';

const NewRequest = props => {
	return(
		<React.Fragment>
		  
      <Header/>
      <h2 className="requests_time">Request free time</h2>
      <Date/>
      <Calendar/>
      <label htmlFor="" className="label_textarea">
      <textarea className="input-coment" type="text-area" placeholder="Coment"/>
      </label>
      <Error/>
		</React.Fragment>

	);
}

NewRequest.propTypes = {

}


export default NewRequest;