import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

// import TodoItem from './components/TodoItem' // src 폴더 안에 ./ 경로를 써줘야 함.
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { TodoConsumer } from "../contexts/TodoContext";


export default class TodoContainer extends Component {
  render() {
    return (
      <TodoConsumer>
        {({todos, onCreate, onTodoComplete , onTodoDelete, onTodoBodyUpdate, loading}) => (
          <div>
            <h1>할 일 목록</h1>
            <TodoForm onCreate={onCreate} />
            {loading ? (
              <div>loading...</div>
            ) : (
              <TodoList
                todos={todos}
                onTodoComplete={onTodoComplete}
                onTodoDelete={onTodoDelete}
                onTodoBodyUpdate={onTodoBodyUpdate}
              />
            )}
          </div>
        )}
      </TodoConsumer>
    );
  }
}

