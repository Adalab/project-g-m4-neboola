import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import moment from 'moment';
import arrow from '../images/right-arrow.png';
import checkBlack from '../images/check-black.png';
import rewind from '../images/rewind.png';
import checkfull from '../images/checkfull.png';


const Info = props => {
  
  const { requests, collapsibleId, handleCollapsible, currentDay, 
         handleOption, option, promptDelete, deleteLS,updateState} = props;
				 
	let filteredRequests = [];
	let mappedRequests = [];
	let countedDays = 0;
	let icon = undefined;
	let subtitle = '';
	switch(option){
		case 'requested': 
				filteredRequests = requests.filter(collapsible => collapsible.status !== 'approved');
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				icon = checkfull;
				subtitle = 'Free time';
				break;
		case 'past':
				filteredRequests = requests.filter(collapsible => collapsible.status === 'approved' &&  moment(collapsible.endDate).format('DD-MM-YYYY') < currentDay);
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				icon = rewind;
				subtitle = 'Free time';
				break;
		case 'scheduled':
				filteredRequests = requests.filter(collapsible => collapsible.status === 'approved' && moment(collapsible.endDate).format('DD-MM-YYYY') >= currentDay);
				mappedRequests = filteredRequests.map(collapsible => collapsible.daysCount);
				countedDays = mappedRequests.reduce((acc, number) => acc + number, 0);
				icon = checkBlack;
				subtitle = 'Requested time';
				break;
		default:
				filteredRequests = requests;
	}				
	
	return(
		<React.Fragment>
			<Header  updateState={updateState} deleteLS={deleteLS}/>
				<h2 className="info_title">{subtitle}</h2>
				<ul className="options_list">
					<li className={`option ${option === "scheduled" ? 'selected-option' : ''}`} id="scheduled" onClick={handleOption}>scheduled</li>
					<li className={`option ${option === "past" ? 'selected-option' : ''}`} id="past" onClick={handleOption}>past</li>
					<li className={`option ${option === "requested" ? 'selected-option' : ''}`} id="requested" onClick={handleOption}>requests</li>
				</ul>
				<p>{`${countedDays} days ${option}`}</p>
				<ul className="info_list">
					{filteredRequests
					.map(collapsible => {
						return (
							<li className="info_collapsible" key={collapsible._id}>
								<div id={collapsible._id} className={`collapsible_container ${collapsibleId === collapsible._id ? 'open' : '' }`}>
									<div className="box_request" onClick={handleCollapsible} data-id={collapsible._id}>
									<div className="box_visible" >		
										<img className="collapsible_icon" src={icon} alt=""/>
										<div className="box_create">
										<p className="create_date">{moment(collapsible.createdAt).format('DD/MM/YYYY')}</p> 
										<p className="create_count">{collapsible.daysCount} days</p> 
										</div>
									</div>
									<div className="boxes_date rollContainer-js" d={collapsible._id}>
											<div className="date_container start"> 
												<p className=" text text-from">from</p>
												<p className="date date-start">{moment(collapsible.startDate).format('DD MMM YYYY')} </p>
											</div>
											<img className="right-arrow" src={arrow} alt="flecha hacia la derecha"/>
											<div className="date_container end">
												<p className=" text text-to">to</p>
												<p className="date date-end"> {moment(collapsible.endDate).format('DD MMM YYYY')}</p>
											</div>
										<button type="button" 
											className={`delete-btn ${option === 'requested' ? '' : 'hidden'}`}
											id={collapsible._id} 
											onClick={promptDelete}>
											delete request
										</button>
									</div>
								
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
	collapsibleId: PropTypes.string, 
	handleCollapsible: PropTypes.func.isRequired, 
	currentDay: PropTypes.string.isRequired,
	handleOption: PropTypes.func.isRequired,
	promptDelete: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
	tabSelect: PropTypes.string
}
export default Info;