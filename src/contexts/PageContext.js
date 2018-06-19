import React from 'react';

const {Provider, Consumer} = React.createContext();


class PageProvider extends React.Component {
  state = {
    page: 'login'
  }
  goToTodoPage = (page='main') => {
    this.setState({
      page: page
    })
  }
  render() {
    const value = {
      goToTodoPage: this.goToTodoPage,
      page: this.state.page
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {PageProvider, Consumer as PageConsumer}

