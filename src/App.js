import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			data: {},
			email: ''
		}

		this.getEmail = this.getEmail.bind(this);
  }
	
	getEmail(event) {
		const newEmail = event.currentTarget.value;
		this.setState({
			email: newEmail
		});
	}

	componentDidMount() {
		this.getFetch();
	}

	getFetch() {
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/users/';
		fetch(ENDPOINT + this.state.email)
		.then(response =>response.json())
		.then(data => console.log(data))
		.catch(error => { console.log(error)});

	}
  render() {
    return (
      <div className="app">
				<input type="text" className="text" onChange={this.getEmail} value={this.state.email}/>
      </div>
    );
  }
}

export default App;
