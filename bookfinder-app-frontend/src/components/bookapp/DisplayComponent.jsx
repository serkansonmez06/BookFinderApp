import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeComponent from "./WelcomeComponent"
import LoginComponent from "./LoginComponent"
import ErrorComponent from "./ErrorComponent"
import NotesComponent from "./NotesComponent"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from './AuthenticatedRoute'
import SearchComponent from './SearchComponent'
import ContactComponent from './ContactComponent'
import AboutMe from './AboutMe'
import TodoComponent from './TodoComponent'

class DisplayComponent extends Component {
  render() {
    return (
      <div className="display">
          <Router>  
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              
              <AuthenticatedRoute exact path="/welcome/:name" render={(props) => <WelcomeComponent {...props}/>}/>
              <AuthenticatedRoute  excat path="/todos/:id" render={(props) => <TodoComponent {...props}/>}/>
              <AuthenticatedRoute exact path="/todos" component={NotesComponent}/>
              <AuthenticatedRoute excat path="/search" component={SearchComponent}/>
              <AuthenticatedRoute excat path="/logout" component={LogoutComponent}/>
              <AuthenticatedRoute excat path="/aboutme" component={AboutMe}/>
              <AuthenticatedRoute excat path="/contact" component={ContactComponent}/>
              
              <AuthenticatedRoute exact component={ErrorComponent}/>
              </Switch>
              <FooterComponent/>
          </Router>
       
       
      </div>
    );
  }
}






export default DisplayComponent;
