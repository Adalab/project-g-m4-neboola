import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import Collapsibles from './Collapsibles';
import moment from "moment";


class Info extends React.Component {
    render() {
        const { requests, collapsibleId, handleCollapsible, currentDay } = this.props;

        return(
          <React.Fragment>
						<Header/>
							<h2 className="info_title">request time</h2>
							<ul className="info_list">
                <p>{`5 days  `}</p>
								{requests
								.filter(collapsible => collapsible.status==='approved')
								.filter(collapsible => collapsible.status==='pending')
								.filter(collapsible => moment(collapsible.endDate).format('DD-MM-YYYY') >= currentDay)
								.map(collapsible => {
									return (
										<li className="info_collapsible" key={collapsible._id}>
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
										</li>
									)
								})}
							</ul>
          </React.Fragment>
        );
    }
}

Info.propTypes = {

}
export default Info;