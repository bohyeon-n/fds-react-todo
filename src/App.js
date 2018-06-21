import React from "react";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserProvider } from "./contexts/UserContext";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/todo" render={() => <TodoPage />} />
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

const Home = () =>
  localStorage.getItem("token") ? (
    <Redirect to="/todo" />
  ) : (
    <Redirect to="/login" />
  );
