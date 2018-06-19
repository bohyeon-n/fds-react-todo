import React, {Component} from 'react'
export default class TodoItem extends Component {
  handleBodyClick = e => {
    const newBody = prompt('새 내용을 입력하세요')
    const {id, onBodyUpdate}=this.props
    onBodyUpdate(id, newBody)
  }
  render() {
    // 변수에 저장된 것을 넘겨주면, 메모리에 저장된 데이터를 쓸 수 있다. 
    // 가입된 회원이라면, 서버에 있는 데이터를 넘겨주면 실제 유저의 할 일 목록을 넣어줄 수 있다. 
    const {
        id,
       body, 
       complete, 
       onComplete, 
       onDelete
      } = this.props;
    return (
      <li className={complete ? "complete" : ""} key={id}>
        <span onClick={this.handleBodyClick}>{body}</span>
        <button onClick={e => {
          onComplete(id);
        }}>완료</button>
        <button
          onClick={e => {
          onDelete(id)
          }}
        >삭제</button>
      </li>
    );
  }
}