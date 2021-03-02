import axios from "axios";
import { JPA_API_URL } from "../../components/Constant";

class TodoDataService {
  retrieveAllTodos(name) {
    //console.log('executed service')
    return axios.get(`${JPA_API_URL}/users/${name}/notes`);
  }

  retrieveTodo(name, id) {
    //console.log('executed service')
    return axios.get(`${JPA_API_URL}/users/${name}/notes/${id}`);
  }

  deleteTodo(name, id) {
    //console.log('executed service')
    return axios.delete(`${JPA_API_URL}/users/${name}/notes/${id}`);
  }

  updateTodo(name, id, note) {
    //console.log('executed service')
    return axios.put(`${JPA_API_URL}/users/${name}/notes/${id}`, note);
  }

  createTodo(name, note) {
    //console.log('executed service')
    return axios.post(`${JPA_API_URL}/users/${name}/notes/`, note);
  }
}

export default new TodoDataService();
