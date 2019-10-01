import React from 'react';
//import PropTypes from 'prop-types';

const Collapsibles = props => {
	return(
		<React.Fragment>
    <div className="collapsible_container">

    <div id="col-1" className={`collapsible_container ${collapsablesId === 'col-1' ? 'open' : '' }`}>
          <img src="" alt="" className="collapsible_icon" />
          <div className="collapsible_content"  data-id="col" onClick={handleCollapsable}>
            <p className="collapsible_date"></p>
            <p className="collapsible_count"></p>
          </div>
          <img src="" alt="" className="collapsible_icon-arrow"/>
    </div>

     </div>

		</React.Fragment>

	);
}

Collapsibles.propTypes = {

}
export default Collapsibles;