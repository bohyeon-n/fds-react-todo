import React from 'react'
import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

export default class App extends React.Component {
  state = {
    page: 'login'
  }
  goToTodoPage = () => {
    this.setState({
      page: 'main'
    })
  }
render() {
  const {page} = this.state
  return (
    <div>
      {page === 'login' ? (
        <LoginPage onLogin={this.goToTodoPage}/>
      ) : (
        <TodoPage/>
      )}
    </div>
  )
  }
}