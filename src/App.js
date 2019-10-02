import React from 'react';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Info from './components/Info';
import NewRequest from './components/NewRequest';
import './scss/App.scss';
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			data: {},
			email: '',
      startDate:'',
      endDate:'',
      currentDay:'',
      comment:'',
      countDays: 0,
			collapsibleId: '',
			requests: []
		}

		this.getEmail = this.getEmail.bind(this);
    this.getFetch = this.getFetch.bind(this);
    this.getUser = this.getUser.bind(this);
    this.deleteLS = this.deleteLS.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getCurrentDate = this.getCurrentDate.bind(this);
    this.getCountDays= this.getCountDays.bind(this);
    this.handleCreateRequest = this.handleCreateRequest.bind(this);
    this.postFetch =this.postFetch.bind(this);
    this.handleCollapsible = this.handleCollapsible.bind(this);
    
  }
  componentDidMount(){
    this.getUser()
    this.getCurrentDate()
    this.fetchRequest()
  }

  getUser(){
    const ls = JSON.parse(localStorage.getItem('User'));
    if(ls !== null){
      this.setState({
        email: ls.email,
        data:ls.data,
        startDate:ls.startDate,
        endDate:ls.endDate,
        comment:ls.comment,
        countDays: ls.countDays
      })
    }
  }

  getCurrentDate(){
    const date = new Date();
    const year= date.getFullYear();
    let month= parseInt(date.getMonth())+1;
    let day= date.getDate();
    if (parseInt(day)< 10){
      day='0'+day
    }
    if (parseInt(month)< 10){
      month ='0'+ month
    }
    const currentDay=year + '-' + month + '-'+ day;
    console.log(currentDay)
    this.setState({
      currentDay:currentDay
    },() => {localStorage.setItem('User', JSON.stringify(this.state))})
    
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
      startDate:'',
      endDate:'',
      currentDay:'',
      comment:'',
      countDays: 0,
			collapsibleId: '',
			requests: []
    })
  }
  handleCreateRequest(){
    console.log('holaa si entre ')
    this.getCountDays();
   

  }
  postFetch(){
    const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/requests';
    const user = {
      owner: this.state.email,
	    startDate: this.state.startDate,
	    endDate: this.state.endDate,
	    daysCount: this.state.countDays,
	    status: "pending",
	    userComments: this.state.comment
    }
    console.log(user)
    fetch (ENDPOINT, {
        method: 'POST', 
        body : JSON.stringify(user), 
        headers: {
          'content-type' : 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
    
    
  }
  getDate(event){
    const dateInput = event.currentTarget.value;
    const nameDateState =event.currentTarget.name;
    this.getCountDays();
    this.setState({
      [nameDateState]:dateInput
    },() => {
      localStorage.setItem('User', JSON.stringify(this.state))
    });
  }

  getCountDays(){
    const startDate = new moment(this.state.startDate);
    const endDate = new moment(this.state.endDate);
    const  duration = moment.duration(endDate.diff(startDate)).days() + 1;
    this.setState({
      countDays:duration
    },() => {
      localStorage.setItem('User', JSON.stringify(this.state));
      this.postFetch();
    })
  }

  render() {
		const {email, data, startDate, endDate, currentDay, comment, requests, collapsibleId} = this.state;
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
          <Route exact path="/profile/new-request" render={
						() => {
							return(
							<NewRequest 
								email = {email}
                getDate ={this.getDate}
                startDate={startDate}
                endDate={endDate}
                currentDay={currentDay}
                comment ={comment}
                handleCreateRequest={this.handleCreateRequest}
							/>
						);
						}
					}
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
