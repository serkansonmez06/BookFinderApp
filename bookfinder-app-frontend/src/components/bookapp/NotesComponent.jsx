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
    console.log("add");
    this.props.history.push(`/notes/-1`);
  };

  render() {
    return (
      <div>
        <h4>Notes</h4>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Author</th>
                <th>Name Of The Book</th>

                <th>Description</th>
                <th>Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.notes.map((note) => (
                <tr key={note.id}>
                  <td>{note.author}</td>
                  <td>{note.nameofthebook}</td>

                  <td>{note.description}</td>

                  <td>{moment(note.targetDate).format("YYYY-MM-DD")}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.updateTodoClicked(note.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTodoClicked(note.id)}
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
