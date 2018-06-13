import React from 'react'

export default class LoginPage extends React.Component {
  render() {
    const {onLogin} = this.props
    return (
      <div>
        <button onClick={onLogin}>로그인</button>
      </div>
    )
  }
}