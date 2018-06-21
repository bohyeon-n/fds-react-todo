import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TodoItem from './TodoItem'

// 액션이라는 함수가 함수를 반환한다. 
// 어떤 인수를 가지고 출력되는 지 출력된다. onComplete(id) id를 입력하지 않았으니, undefined가 들어와서 실행되고 있다고 뜬다.
storiesOf('TodoItem', module)
.add('empty', () => <TodoItem id={1} onComplete={action("완료버튼 클릭됨")} onDelete={action("삭제버튼클릭됨")}/>)
.add('body가 주어진 경우', () => <TodoItem body='body'/>)
.add('완료된 경우', () => <TodoItem body='완료된 할 일' complete/>)