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
              {requests.map(collapsibles => {
                return (
                  <li className="info_schedule"><div className="item_lists" id={collapsibles.id} key={collapsibles.id}> {collapsibles.id}</div></li>
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