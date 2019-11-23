import React from 'react'
import logo from './logo.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  // getting function to dispatch actions to the store
  const dispatch = useDispatch()

  //getting todoInput value
  const todoInput = useSelector(state => state.todoInput)
  

  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={e => dispatch({type: 'SET_TODO_INPUT', text: e.target.value})}></input>
    </div>
  )
}

export default App
