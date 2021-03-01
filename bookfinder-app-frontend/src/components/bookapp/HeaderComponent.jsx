import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.jsx";
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header className="header" >
                <nav className="navbar navbar-expand-md ">
                    <div> <span className="headertitle"> <img src={"https://image.flaticon.com/icons/png/512/130/130304.png"} height="40px" width="30px"/></span></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/:name"><span className="headertitle">Home</span></Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos"><span className="headertitle">Notes</span></Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/search"><span className="headertitle">Search</span></Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/aboutme"><span className="headertitle">About Me</span></Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login"><span className="headertitle">Login</span></Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}><span className="headertitle">Logout</span></Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/contact"><span className="headertitle">Contact</span></Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(HeaderComponent);
