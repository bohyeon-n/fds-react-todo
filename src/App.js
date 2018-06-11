import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.
import TodoItem from './components/TodoItem' // src 폴더 안에 ./ 경로를 써줘야 함.
let count = 0;

class App extends Component {
  state = {
    todos: [
      {
        id: count++,
        body: "React 공부",
        complete: true
      },
      {
        id: count++,
        body: "Redux 공부",
        complete: false
      }
    ],
    newTodoBody: ""
  };
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  };

  handleButtonClick = e => {
    const newTodo = {
      body: this.state.newTodoBody,
      complete: false,
      id: count++
    };
    if (this.state.newTodoBody) {
      this.setState({
        todos: [...this.state.todos, newTodo],
        newTodoBody: ""
      });
    }
  };
  handleCompleteClick = e => {};

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    });
  };

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }
  render() {
    const { todos, newTodoBody } = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할 일
          <input
            type="text"
            value={newTodoBody}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        <ul>
          {todos.map(todo => (
            <TodoItem 
             key={todo.id} 
             {...todo}
             onComplete={this.handleTodoItemComplete} 
             onDelete={this.handleTodoItemDelete} 
            />
          ))
          }
        </ul>
      </div>
    );
  }
}



export default App;
