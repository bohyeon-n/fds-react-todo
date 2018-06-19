import React from "react";


export default class LoginForm extends React.Component {
  usernameRef = React.createRef()
  passwordRef = React.createRef()
  // 자기가 알아서 잘 상태를 가지고 있다.

  handleSubmit = e => {
    e.preventDefault()
    const username = this.usernameRef.current.value
    const password = this.passwordRef.current.value
    const {onLogin} = this.props
    onLogin(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>로그인페이지</h1>
        <label>
          {/* defaultvalue 제어되지 않는 컴포넌트를 사용하면서도, 값을 넣어줄 때 */}
          아이디: <input type="text" ref={this.usernameRef}/>
        </label>
        <label>
          비밀번호: <input type="password"  ref={this.passwordRef}/>
        </label>
        <button>로그인</button>
      </form>
    );
  }
}
