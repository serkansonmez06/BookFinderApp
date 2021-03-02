import React, { Component } from "react";
import { Link } from "react-router-dom";
// import HelloWorldService from "../../api/todo/HelloWorldService"
class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            // name:"serkan",
           welcomeMessage: '' 
        }
    }
  
    handleSuccesfulResponse=(response)=>{
        this.setState({
            welcomeMessage: response.data.message
        })
       
    }
    handleError=(error)=>{
        console.log(error.response)
        this.setState({
            welcomeMessage: error.response.data.message
        })
    }

  render() {
    return (
        <div>
        <div className="container-2">
            <h1>Welcome!</h1>
            <div className="welcomename">
           {this.props.match.params.name}
           
            </div>
        </div>
    
    
    </div>
    )        
  }
}

export default WelcomeComponent;
