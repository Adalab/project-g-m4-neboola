import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import NewRequest from './components/NewRequest';
import './scss/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			data: {},
      email: ''
		}

		this.getEmail = this.getEmail.bind(this);
    this.getFetch = this.getFetch.bind(this);
    this.getUser = this.getUser.bind(this);

  }
  componentDidMount(){
    this.getUser()
  }

  getUser(){
    const ls = JSON.parse(localStorage.getItem('User'));
    if(ls !== null){
      this.setState({
        email: ls.email,
        data:ls.data
      })
    }
  }
	
	getEmail(event) {
		const newEmail = event.currentTarget.value;
		this.setState({
			email: newEmail
		},() => {localStorage.setItem('User', JSON.stringify(this.state))});
	}

	getFetch() {
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/users/';
		console.log(ENDPOINT + this.state.email);
		fetch(ENDPOINT + this.state.email)
		.then(response =>response.json())
    .then(data =>  
      this.setState({
      data: data
    },
    () => {
      localStorage.setItem('User', JSON.stringify(this.state))
    }
    
    ))
    .catch(error => { console.log(error)});
  }

  render() {
		const {email, data} = this.state;
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
                getFetch = {this.getFetch}
                email = {email}
                data={data}
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
