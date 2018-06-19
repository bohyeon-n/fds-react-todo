import React, {Component} from 'react'
import TodoItem from './TodoItem'

// presentaion component는 외부세계와 어떻게 연결될지에 대한 가정을 하지 않는 것이 좋다.
// 그런 성질을 갖고 있는 인터페이스를 가지고 중립적인 인터페이스라곻 ㅏㄴ다.
// 특정외부세계를 가정하고 만들지 않는다. 데모페이지를 만들 때 
// 인터페이스를 중립적으로 만들어놓았다면 데모페이지를 추가하는 것이 쉽다. 그러나, todoItem에 상호작용하는 코드가 들어있다면 다시 만들기가 어렵다.

export default class TodoList extends Component {
  render() {
    const {
      todos, 
      onTodoComplete, 
      onTodoDelete,
      onTodoBodyUpdate}
      = this.props;
    
    return (
      <ul>
      {todos.map(todo => (
        <TodoItem 
         key={todo.id} 
         {...todo}
         onComplete={onTodoComplete} 
         onDelete={onTodoDelete} 
         onBodyUpdate={onTodoBodyUpdate} 
        />
      ))
      }
    </ul>
    )
  }
} 