import React, { Component } from 'react';
import { Navigation } from '../src/Components/Navigation';
import { Main } from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends Component {
   render() {   
    return ( 
      <div className='app'>
        <h1>React Router Demo</h1>
        <Navigation />
        <Main />
      </div> 
    );
  }
}

export default App;