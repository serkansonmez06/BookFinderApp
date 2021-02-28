import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService"
class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            // name:"serkan",
           welcomeMessage: '' 
        }
    }
    // retrieveWelcomeMessage=()=>{
       

    //     HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
    //     .then(response => this.handleSuccesfulResponse(response))
    //     .catch(error => this.handleError(error))
    // }
    // handleSuccesfulResponse=(response)=>{
    //     this.setState({
    //         welcomeMessage: response.data.message
    //     })
       
    // }
    // handleError=(error)=>{
    //     console.log(error.response)
    //     this.setState({
    //         welcomeMessage: error.response.data.message
    //     })
    // }

  render() {
    return (
        <div>
        <div>
            <h1>Welcome!</h1>
            <div className="container">
           {this.props.match.params.name}
           
            </div>
        </div>
        <div>
        
{/*  
        <div className="container">
              {this.state.welcomeMessage}
        </div> */}
    </div>
    
    </div>
    )        
  }
}

export default WelcomeComponent;
