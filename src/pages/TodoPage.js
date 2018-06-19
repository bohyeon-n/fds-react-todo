import React, { Component } from "react"; // 노드 모듈스 안에 라이브러리 모듈을 쓸 떄는 경로를 안쓴다.

// import TodoItem from './components/TodoItem' // src 폴더 안에 ./ 경로를 써줘야 함.
import LogoutButtonContainer from "../containers/LogoutButtonContainer";
import TodoContainer from "../containers/TodoContainer";
import { TodoProvider } from "../contexts/TodoContext";

export default class TodoPage extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoProvider>
          {/* todopagr안에 todoprovider가 있기때문에 로그아웃하면 메모리가 다 날아간다. */}
          <TodoContainer />
          <LogoutButtonContainer />
        </TodoProvider>
      </React.Fragment>
    );
  }
}
