import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import NewRequest from './components/NewRequest';
import './scss/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
			email: '',
    }
		this.getEmail = this.getEmail.bind(this);
  }

	getEmail(event) {
		const newEmail = event.currentTarget.value;
		this.setState({
			email: newEmail
		})
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
								/>
							);
						}}
					/>
          <Route exact path="/profile" component={ Profile } 
					/>
          <Route exact path="/newRequest" component={ NewRequest } 
					/>
        </Switch>
      </div>
    );
  }
}

export default App;
