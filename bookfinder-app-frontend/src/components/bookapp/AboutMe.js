import React, { Component } from "react";
import { connect } from "react-redux"; //import connect
import { developerName } from "../../redux/actions/actionCategories";

class AboutMe extends Component {
  componentDidMount() {
    //executed after the first render and state updates should occur
    this.props.dispatch(developerName()); //dispatch actions and trigger state changes to the store
  }
  render() {
    return (
      <div className="aboutme">
        <p>
          <span className="name">
            {this.props.devName} {this.props.devLast}
          </span>{" "}
          is a full-stack developer with excellent technical expertise (HTML5,
          CSS3, JS - ES6, REACT) with the ability to analyze and solve problems.
          Write, analyze, review, and rewrite programs, using workflow chart and
          diagram, and applying knowledge of computer capabilities, subject
          matter, and symbolic logic. Adaptable and transformational managerial
          skills with an ability to work independently and collaboratively.
        </p>
        <p>
          If you would like ask a question please feel free to send me message.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.devloperNameReducer)
  //mapStateToProps use to provide the store data to component
  //connect state with props with this func
  return {
    // state comes from reducer
    devName: state.name,
    devLast: state.lastName,
  };
  //state value cames from developerNameReducer
}

export default connect(mapStateToProps)(AboutMe);
//
