import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService.jsx";
import moment from "moment";
class NotesComponent extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      notes: [],
      message: "",
    };
  }
  componentDidMount = () => {
    
    this.refreshTodos();
    console.log(this.state);
  };

  refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      console.log(response);
      this.setState({ notes: response.data });
    });
  };
  deleteTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUserName();
    //console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Successfully Deleted` });
      this.refreshTodos();
    });
  };
  updateTodoClicked = (id) => {
    // console.log("update " + id);
    this.props.history.push(`/notes/${id}`);
  };
  addTodoClicked = () => {
    this.props.history.push(`/notes/-1`);
  };

  render() {
  
    return (
      <div>
        <h4 >Notes</h4>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>IsCompleted?</th>
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.notes.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesComponent;
