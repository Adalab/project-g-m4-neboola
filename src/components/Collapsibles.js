import React from 'react';
//import PropTypes from 'prop-types';

const Collapsibles = props => {
	return(
		<React.Fragment>
    <div className="collapsible_container">
      <img src="" alt="" className="collapsible_icon" />
      <div className="collapsible_content">
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