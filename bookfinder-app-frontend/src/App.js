import React, { Component } from 'react';
import FirstComponent from '../src/components/udemy/FirstComponent'
import SecondComponent from '../src/components/udemy/SecondComponent'
import ThirdComponent from '../src/components/udemy/ThirdComponent'
// import Counter from '../src/components/udemy/counter/Counter'
// import logo from './logo.svg';

import './App.css';
import './bootstrap.css'
import ToDoApp from '../src/components/todo/ToDoApp'
class App extends Component {
  render() {
    return (
      <div className="App">
       <ToDoApp/>
    {/* <Counter/> */}
   
      </div>
    );
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
    
       <FirstComponent/>
       <SecondComponent/>
       <ThirdComponent/>
      </div>
    );
  }
}








export default App;
