import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Info from './components/Info';
import NewRequest from './components/NewRequest';
import './scss/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			data: {},
			email: '',
			collapsibleId: '',
			requests: []
		}

		this.getEmail = this.getEmail.bind(this);
    this.getFetch = this.getFetch.bind(this);
    this.getUser = this.getUser.bind(this);
    this.deleteLS = this.deleteLS.bind(this);
  }
  componentDidMount(){
    this.getUser()
		this.fetchRequest()
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

 handleCollapsible(event) {
    const newCollapsibleId = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
      if (newCollapsibleId === prevState.collapsibleId) {
        return {
          collapsibleId: null
        }
      } else {
        return {
          collapsibleId: newCollapsibleId
        }
      }
    })
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

	fetchRequest(){
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/requests?owner=';
		fetch(ENDPOINT + this.state.email)
		.then(response => response.json())
		.then(data => {
      this.setState ({
        requests: data

      })
		})
	}

  deleteLS() {
    localStorage.removeItem('User');
    this.setState({
      data: {},
      email: '',
			requests: []
    })
  }

  render() {
		const {email, data, requests, collapsibleId} = this.state;
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
                deleteLS={this.deleteLS}
							/>
							)
						}} 
					/>
          <Route exact path="/profile/new-request" component={ NewRequest } 
					/>
					<Route exact path="/profile/info" render={
						() => {
							return(
							<Info 
								email = {email}
								handleCollapsible={this.handleCollapsible}
								collapsibleId={collapsibleId}
								requests={requests}
								fetchRequest={this.fetchRequest}
							/>
						);
						}
					}
					/>
        </Switch>
      </div>
    );
  }
}

export default App;
