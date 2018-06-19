import React from "react";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";

import { PageProvider, PageConsumer } from "./contexts/PageContext";
import { UserProvider } from "./contexts/UserContext";
import { TodoProvider } from "./contexts/TodoContext";
export default class App extends React.Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {/* Provider의 자손인 모든 Consumer는 Provider의 value prop이 바뀔 때마다 다시 렌더링됩니다. 
        이는 shouldComponentUpdate의 영향을 받지 않으므로, 조상 컴포넌트의 업데이트가 무시된 경우라 할지라도 
      Consumer는 업데이트될 수 있습니다.  */}

            {value => (value.page === "login" ? <LoginPage /> : <TodoPage />)}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    );
  }
}
