import React from 'react'
import logo from './logo.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {setTodoInput} from './actions'

function App() {
  // getting function to dispatch actions to the store
  const dispatch = useDispatch()

  //getting todoInput value
  const todoInput = useSelector(state => state.todoInput)

  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={e => dispatch(setTodoInput(e.target.value))}></input>
    </div>
  )
}

export default App
