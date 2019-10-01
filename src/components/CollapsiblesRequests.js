import React from 'react';
//import PropTypes from 'prop-types';

const CollapsiblesRequests = props => {
	return(
		<React.Fragment>
    <div className="collap-req_container">
      <img src="" alt="" className="collap-req_icon" />
      <div className="collap-req_content">
        <p className="collap-req_date"></p>
        <p className="collap-req_count"></p>
      </div>
      <img src="" alt="" className="collap-req_icon-arrow"/>
    </div>
    <p className="collap-req_delate"></p>
		</React.Fragment>

	);
}

CollapsiblesRequests.propTypes = {

}
export default CollapsiblesRequests;