import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:''
    }
  }

  render() {
    return (
      <div className="app">
        <Switch>
	        <Route exact path="/" component={ Login }></Route>
          <Route exact path="/profile" component={ Profile }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
