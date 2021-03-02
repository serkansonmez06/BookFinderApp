import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.jsx";

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: 'Serkan',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
      
       
    }

    handleChange =(event) =>{
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

   

    loginClicked=() =>{
        
        if(this.state.username==='Serkan' && this.state.password==='1234'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="logincomp">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
