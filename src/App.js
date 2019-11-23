import React from 'react'
import logo from './logo.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {setTodoInput, addTodo} from './actions'

function App() {
  // getting function to dispatch actions to the store
  const dispatch = useDispatch()

  //getting todoInput value
  const todoInput = useSelector(state => state.todoInput)

  const todos = useSelector(state => state.todos)

  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={e => dispatch(setTodoInput(e.target.value))}></input>
      <input type="button" onClick={() => dispatch(addTodo())} value="Add todo"></input> 
      <ul>
        {todos.map(todo => <li>{todo.text}</li>)}
      </ul>
    </div>
  )
}

export default App
