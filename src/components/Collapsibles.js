/* import React from 'react';
import PropTypes from 'prop-types';

const Collapsibles = props => {

  const {
   collapsibleId,
   handleCollapsible
  } = props;

	return(
		<React.Fragment>
			<div id={collapsible._id} className={`collapsible_container ${collapsibleId === collapsible._id ? 'open' : '' }`}>
				<div className="box_visible" onClick={handleCollapsible} data-id={collapsible._id}>
					
					<img className="collapsible_icon" src="" alt=""/>
					<p className="create_date">{moment(collapsible.createdAt).format('DD/MM/YYYY')}</p> 
					<p className="create_count">{collapsible.daysCount} days</p> 
				</div>
				
				<div className="boxes_date rollContainer-js" >
					<div className="date_container start"> 
						<p className=" text text-from">from</p>
						<p className="date">{moment(collapsible.startDate).format('DD MMM YYYY')} </p>
					</div>

					<div className="date_container end">
						<p className=" text text-to">to</p>
						<p className="date"> {moment(collapsible.endDate).format('DD MMM YYYY')}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

Collapsibles.propTypes = {

}
export default Collapsibles; */