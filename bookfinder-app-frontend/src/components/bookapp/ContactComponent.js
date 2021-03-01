import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { connect } from "react-redux";
// import { addContactMessage } from "../../redux/actions/actionCategories";



class ContactComponent extends Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    city: "",
    message: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("test");
    //handlechange will target input
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      lastName: "",
      email: "",
      city: "",
      message: "",
    });

    // this.props.dispatch(addContactMessage(this.state)); // dispatch props from action categories
    //updates addContactMessage state and userComment get info from reducer
    //first import actionTypes.

    // alertifyjs.success("Sending", 1.5); //method return a box bottom right
  };

  render() {
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">First and Last Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              placeholder="First and Last Name"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              value={this.state.city}
              onChange={this.handleChange}
            >
              <option>Boston/MA</option>
              <option>Cincinnati/OH </option>
              <option>Newark/NJ</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={this.state.message}
              placeholder="Type your message"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button type="submit" color="success" onClick={this.handleSubmit}>
            Send
          </Button>
        </Form>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     note: state.messages,
//   };
// }

export default (ContactComponent);
//connect(mapStateToProps)