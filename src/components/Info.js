import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Scheduled from './Scheduled';
import Collapsibles from './Collapsibles';
/* import Past from './Past';
import Requests from './Requests';
 */

class Info extends React.Component {
    render() {
        const { requests } = this.props;

        return(
          <React.Fragment>
						<Header/>
							<h2 className="info_title">request time</h2>
							<ul className="info_list">
								{requests.map(collapsible => {
									return (
										<li className="info_schedule" key={collapsible._id} id={collapsible._id}>
											<div className="item_lists">{collapsible._id}</div>
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