import React from 'react';
//import PropTypes from 'prop-types';
//import Info from './Info';
//import NewRequest from './NewRequest';
import logout from './../images/logout.png';
import profile from './../images/profile.png';
import umbrella from './../images/umbrella.png';
import check from './../images/check.png';
import { Link } from 'react-router-dom';

const Profile = props => {
  const {data} = props;
	return(
		<React.Fragment>
      <header className="prof_header">
        <h1 className="prof_title">Neboola</h1>
        <img src={logout} alt="Logout icon" className="prof_logout-icon"></img>
      </header>
      <main className="prof_main">
        <div className="prof_container">
          <img src={profile} alt="" className="prof_img"/>
          <h2 className="prof_user-name">Judith Elliott</h2>
          <p className="prof_mail">{data.email}</p>
          <Link to="/newRequest" className="link newrequest_link">
            <p className="newrequest_link_text">Request free time</p>
          </Link>
        </div>
        <div className="info_container-nav">
          <Link to="/info" className="link info_link">
            <div className="prof-info_container">
            <div className="prof_icon-container">
              <img className="prof_icon" src={umbrella} alt="Umbrella icon"></img>
            </div>
              <p className="prof_number">{data.remainingDays}</p>
              <p className="prof_text">available days</p>
            </div>
          </Link>
          
          <Link to="/info" className="link info_link">
            <div className="prof-info_container">
              <div className="prof_icon-container">
                <img className="prof_icon" src={check} alt="Check icon"></img>
              </div>
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