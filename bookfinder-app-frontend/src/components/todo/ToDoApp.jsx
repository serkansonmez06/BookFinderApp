import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from "./WelcomeComponent"
import LoginComponent from "./LoginComponent"
import ErrorComponent from "./ErrorComponent"
import ListTodosComponent from "./ListTodosComponent"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from './AuthenticatedRoute'
import TodoComponent from './TodoComponent'
import SearchComponent from './SearchComponent'

class ToDoApp extends Component {
  render() {
    return (
      <div>
          <Router>  
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              
              <AuthenticatedRoute exact path="/welcome/:name" render={(props) => <WelcomeComponent {...props}/>}/>
              <AuthenticatedRoute  excat path="/todos/:id" render={(props) => <TodoComponent {...props}/>}/>
              <AuthenticatedRoute exact path="/todos" component={ListTodosComponent}/>
              <AuthenticatedRoute excat path="/search" component={SearchComponent}/>
              <AuthenticatedRoute excat path="/logout" component={LogoutComponent}/>
              
              <AuthenticatedRoute exact component={ErrorComponent}/>
              </Switch>
              <FooterComponent/>
          </Router>
       
        {/* <WelcomeComponent/> */}
      </div>
    );
  }
}






export default ToDoApp;
