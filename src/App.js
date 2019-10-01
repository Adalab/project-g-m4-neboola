import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import NewRequest from './components/NewRequest';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			data: {},
			email: ''
		}

		this.getEmail = this.getEmail.bind(this);
		this.getFetch = this.getFetch.bind(this);

  }
	
	getEmail(event) {
		const newEmail = event.currentTarget.value;
		this.setState({
			email: newEmail
		});
	}

/* 	componentDidMount() {
		this.getFetch();
	}
 */

	getFetch() {
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/users/';
		console.log(ENDPOINT + this.state.email);
		fetch(ENDPOINT + this.state.email)
		.then(response =>response.json())
		.then(data => console.log(data))
		.catch(error => { console.log(error)});
	}

  render() {
		const {email} = this.state;
    return (
      <div className="app">
        <Switch>
	        <Route exact path="/" render={
						() => {
							return(
								<Login 
									getEmail = {this.getEmail}
									email = {email}
									getFetch = {this.getFetch}
								/>
							);
						}}
					/>
          <Route exact path="/profile" render={
						() => {
							return (
							<Profile 
								getEmail = {this.getEmail}
								email = {email}
								getFetch = {this.getFetch}
							/>
							)
						}} 
					/>
          <Route exact path="/newRequest" component={ NewRequest } 
					/>
        </Switch>
      </div>
    );
  }
}

export default App;
