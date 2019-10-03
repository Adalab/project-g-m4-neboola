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
      requests: [],
      error: false,
			option: 'scheduled'
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
    this.getWeekends = this.getWeekends.bind(this);
		this.handleOption = this.handleOption.bind(this);
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
    const domain = '@neboola.co'
		const ENDPOINT = 'https://neboola-holidays-api.herokuapp.com/open/users/';
    if(this.state.email.toLowerCase().includes(domain.toLowerCase()) === false){
      this.setState({
        error: true
      })
    }
    
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
		console.log(ENDPOINT + this.state.email)
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
      requests: [],
			option: 'scheduled',
			error: false
    })
  }
  handleCreateRequest(){
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
    //this.getCountDays();
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
    console.log("pre " + duration)
    this.setState({
      countDays:duration
    },() => {
      localStorage.setItem('User', JSON.stringify(this.state));
      this.getWeekends();
      //console.log(this.state.countDays);
    })
  }

  getWeekends () {
    let pivotDate = moment(this.state.startDate)
    let counter = 0;
    for( let i = 0 ; i < this.state.countDays; i++) {
      if(pivotDate.day() === 6 || pivotDate.day() === 0 ) {
        counter++
        console.log('finde')
      }
      console.log(pivotDate.day())
      pivotDate = pivotDate.add(1, 'days')
    }
    const newCountDays = this.state.countDays - counter;
    this.setState({
      countDays: newCountDays
    },
    () => {
      localStorage.setItem('User', JSON.stringify(this.state));
      this.postFetch();
    })
  }

	handleOption(event) {
		const newOption = event.currentTarget.id;
		this.setState({
			option: newOption
		});
	} 

  render() {
		const {email, data, startDate, endDate, currentDay, 
					comment, requests, collapsibleId, option, error} = this.state;
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
                  error={error}
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
                deleteLS={this.deleteLS}
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
								currentDay={currentDay}
								option={option}
								handleOption={this.handleOption}
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
