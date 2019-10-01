import React from 'react';
//import PropTypes from 'prop-types';
//import Info from './Info';
//import NewRequest from './NewRequest';
import { Link } from 'react-router-dom';

const Profile = props => {
  const {data} = props;
	return(
		<React.Fragment>
      <header className="prof_header">
        <h1 className="prof_title">Neboola</h1>
      </header>
      <main className="prof_main">
        <div className="prof_container">
          <img src="" alt="" className="prof_img"/>
          <h2 className="prof_user-name">Judith Elliott</h2>
          <p className="prof_mail">{data.email}</p>
          <Link to="/newRequest" className="newrequest_link">
            Request free time
          </Link>
        </div>
        <div className="info_container-nav">
          <Link to="/info" className="link info_link">
            <div className="prof-info_container">
              {/*<i></i> */}
              <p className="prof_number">{data.remainingDays}</p>
              <p className="prof_text">available days</p>
            </div>
          </Link>
          
          <Link to="/info" className="link info_link">
            <div className="prof-info_container">
              {/*<i></i> */}
              <p className="prof_number">{data.requestedDays}</p>
              <p className="prof_text">scheduled days</p>
            </div>
          </Link>
        </div>
      </main>
		</React.Fragment>

	);
}

Profile.propTypes = {

}
export default Profile;