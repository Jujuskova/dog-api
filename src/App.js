import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo2.png';
import './App.css';
import List from './Components/List/List';

class App extends Component {

  state = {
    breeds : [],
  }

  componentDidMount() {
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => this.setState({breeds : Object.keys(res.data.message)}))

    // fetch(`https://dog.ceo/api/breeds/list/all`)
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.message)
    // })
    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <List getBreeds={this.state.breeds}/>
        
      </div>
    );
  }
}

export default App;
