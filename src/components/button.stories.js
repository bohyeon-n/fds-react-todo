import React from 'react';
import classnames from 'classnames';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('LoginForm', module)
.add('primary', () => <button className={classnames("button", 'is-primary')}>버튼</button>)
.add('loading', () => <button className={classnames('button', {'is-loading': true})}>로딩중</button>)
.add('todo-form', () => <button className={classnames('todo-form', {'todo-form--loading': true})}>로딩중</button>)

