import React, { Component } from 'react';

// import Counter from '../src/components/udemy/counter/Counter'
// import logo from './logo.svg';

import './App.css';
import './bootstrap.css'
import DisplayComponent from './components/bookapp/DisplayComponent.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
       <DisplayComponent/>
    {/* <Counter/> */}
   
      </div>
    );
  }
}



export default App;
