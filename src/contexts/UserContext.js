import React from 'react'
import todoAPI from '../todoAPI'


const {Provider, Consumer} = React.createContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    // 로그인이 성공적으로 되야, 그 다음작업을 하기 때문에 모든 작업을 트라이 안에 넣어준다. 
    try {
      const res = await todoAPI.post('/users/login', {
        username: username,
        password: password
      })

      // localstorage
      localStorage.setItem('token', res.data.token);
      
      // 페이지 전환 //props로 넘겨받던 로그인 함수를 지움(provider간 의존을 하면 안된다.)
      
    } catch(e) {
      // 위에서 에러가 나면 트라이블록 밑에 있는 코드가 실행되는 것이 아니라 ,
      // 요기로 코드 실행이 넘어온다. 
      // 정확히 axios에러이면서 400 에러
      if(e.response && e.response.status === 400) {
          alert("아이디 혹은 비밀번호가 일치하지 않습니다")
        } 
      // 응답을 아예 못받을 수도 있다 (response속성이 없을 수 있다. ) axios handling errors 참조하기 
    }

    
  }
  logout = () => {
    localStorage.removeItem("token");
  }

  render() {
    const value = {
      login: this.login,
      logout: this.logout
    }
    return (
      <Provider value={value}>{this.props.children}</Provider>
    )
  }
}

export {UserProvider, Consumer as UserConsumer};
