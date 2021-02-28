import React, { Component } from "react";
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService.jsx'
import moment from 'moment'
class ListTodosComponent extends Component {
    constructor(props){
        console.log('')
        super(props)
        this.state = {
            todos : []
        }
    }

    componentDidMount=() =>{
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }


    refreshTodos=()=> {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retriveAllTodos(username)
          .then(response => {
                  console.log(response);
                  this.setState({todos : response.data})
              }
          ) 
    }
    deleteTodoClicked=(id)=> {
        let username = AuthenticationService.getLoggedInUserName()
        console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
         .then (
             response => {
                this.setState({message : `Delete of todo ${id} Successful`})
                this.refreshTodos();
             }
         )
        
    }
    updateTodoClicked=(id)=> {
        console.log("update")
        this.props.history.push(`/todos/${id}`)
    }
    addTodoClick=()=> {
        
        this.props.history.push(`/todos/-1`)
    }


    render() {
        return (
            <div>
                 <h1>Notes</h1>
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        {/* <td>{todo.done.toString()}</td> */}
                                        <td>{moment(new Date()).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        
                                    </tr>
                            )
                            }
                        </tbody>

                    </table>
                    <button type="button" className="btn btn-primary btn-block" onClick={this.addTodoClick}>Add</button>
                 </div>
            </div>
        )
    }
}


export default ListTodosComponent;
