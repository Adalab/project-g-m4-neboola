import React from 'react';
import './App.css';
import Login from './components/Login';

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
				<Login />
      </div>
    );
  }
}

export default App;
