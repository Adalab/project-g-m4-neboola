import React from 'react';
import Calendar from './Calendar';
//import PropTypes from 'prop-types';

const Collapsibles = props => {

  const {
   collapsibleId,
   handleCollapsible
  } = props;
	return(
		<React.Fragment>
    
      <div className="date_container" >
        <img src="" alt="" className="collapsible_icon" />
        <div className="collapsible_content"  data-id="col" onClick={handleCollapsible}>
          <p className="collapsible_date"></p>
          <p className="collapsible_count"></p>
        </div>
        <img src="" alt="" className="collapsible_icon-arrow"/>
      </div>   
		</React.Fragment>
	);
}

Collapsibles.propTypes = {

}
export default Collapsibles;