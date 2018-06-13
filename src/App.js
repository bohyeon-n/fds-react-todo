import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.
import axios from 'axios'; // 구분을 하는 것이 관례이다. 

// import TodoItem from './components/TodoItem' // src 폴더 안에 ./ 경로를 써줘야 함. 
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: count++,
      //   body: "React 공부",
      //   complete: true
      // },
      // {
      //   id: count++,
      //   body: "Redux 공부",
      //   complete: false
      // }
    ]
  };
  
  async componentDidMount() {
    await this.fetchTodos();
  }

  
  fetchTodos = async () => {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    })
    
  }


  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      }
      this.setState({
        loading: true
      })
      await todoAPI.post('/todos', newTodo)
      await this.fetchTodos()
    }
  };
 updateTodoBody = async (id, body) => {
   this.setState({
     loading: true
   });
   await todoAPI.patch(`/todos/${id}`, {
     body
   })
   await this.fetchTodos();
 }

 completeTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    })
    await this.fetchTodos();
  };

  deleteTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.delete(`todos/${id}`)
    await this.fetchTodos();
  }
  render() {
    const { todos, loading } = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <TodoForm onCreate={this.createTodo}/>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList 
          todos={todos}
          onTodoComplete={this.completeTodo} 
          onTodoDelete={this.deleteTodo}
          onTodoBodyUpdate={this.updateTodoBody}
          />
          )}
      </div>
    );
  }
}





export default App;
