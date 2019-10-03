import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import moment from "moment";


const Info = props => {
  
  const { requests, collapsibleId, handleCollapsible, currentDay, 
         handleOption, option, removeRequest } = props;
	let filteredRequests = [];
	let mappedRequests = [];
	let countedDays = 0;
	switch(option){
		case 'requested': 
				filteredRequests = requests.filter(collapsible => collapsible.status !== 'approved');
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				break;
		case 'past':
				filteredRequests = requests.filter(collapsible => collapsible.status === 'approved' &&  moment(collapsible.endDate).format('DD-MM-YYYY') <= currentDay);
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				break;
		case 'scheduled':
				filteredRequests = requests.filter(collapsible => collapsible.status === 'approved' && moment(collapsible.endDate).format('DD-MM-YYYY') >= currentDay);
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				break;
		default:
				filteredRequests = requests;
	}				
	return(
		<React.Fragment>
			<Header/>
				<h2 className="info_title">request time</h2>
				<ul className="options_list">
					<li className="option_scheduled" id="scheduled" onClick={handleOption}>scheduled</li>
					<li className="option_past" id="past" onClick={handleOption}>past</li>
					<li className="option_requests" id="requested" onClick={handleOption}>requests</li>
				</ul>
				<p>{`${countedDays} days ${option}`}</p>
				<ul className="info_list">
					{filteredRequests
					.map(collapsible => {
						return (
							<li className="info_collapsible" key={collapsible._id}>
								<div id={collapsible._id} className={`collapsible_container ${collapsibleId === collapsible._id ? 'open' : '' }`}>
									<div className="box_visible" onClick={handleCollapsible} data-id={collapsible._id}>		
										<img className="collapsible_icon" src="" alt=""/>
										<p className="create_date">{moment(collapsible.createdAt).format('DD/MM/YYYY')}</p> 
										<p className="create_count">{collapsible.daysCount} days</p> 
									</div>
									<div className="boxes_date rollContainer-js" d={collapsible._id}>
										<div className="date_container start"> 
											<p className=" text text-from">from</p>
											<p className="date">{moment(collapsible.startDate).format('DD MMM YYYY')} </p>
										</div>
										<div className="date_container end">
											<p className=" text text-to">to</p>
											<p className="date"> {moment(collapsible.endDate).format('DD MMM YYYY')}</p>
										</div>
										<button type="button" 
											className={`delete-btn ${option === 'requested' ? '' : 'hidden'}`}
											id={collapsible._id} 
											onClick={removeRequest}>
											delete request
										 </button>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
		</React.Fragment>
	);
}


Info.propTypes = {
	requests: PropTypes.arrayOf(PropTypes.object).isRequired, 
	collapsibleId: PropTypes.string.isRequired, 
	handleCollapsible: PropTypes.func.isRequired, 
	currentDay: PropTypes.string.isRequired,
	handleOption: PropTypes.func.isRequired,
	removeRequest: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
}
export default Info;