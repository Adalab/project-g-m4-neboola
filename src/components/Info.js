import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Scheduled from './Scheduled';
import Collapsibles from './Collapsibles';
/* import Past from './Past';
import Requests from './Requests';
 */

class Info extends React.Component {


componentDidMount() {
 this.fetchRequest();
}

	fetchRequest(){
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/requests?owner=';
		fetch(ENDPOINT + this.props.email)
		.then(response => response.json())
		.then(data => console.log(data))
	}
    render() {
        const { collapsibleId } = this.props;

        return(
          <React.Fragment>
           <Header/>
            <h2 className="info_title">request time</h2>
            <ul className="info_list">
              {collapsibleId.map(collapsibles => {
                return (
                  <li className="info_schedule"><div className="item_lists"> </div></li>
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