import React from 'react'

export default class OnMount extends React.Component {
  //렌더링 되었을 때 함수를 실행시키기 위해서 이런 함수를 쓸 수 있다. 
  // 화면을 그리기 위한 컴포넌트가 아니다. 
  componentDidMount () {
    const {onMount} = this.props;
    onMount()
  }
  render() {
    return null
  }
}