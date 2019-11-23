import {createStore} from 'redux'
import {SET_TODO_INPUT, ADD_TODO} from './actions'

const initialState = {
  todoInput: '',
  todos: []
}

const reducer = (state, action) => {
  console.log(state)
  switch(action.type) {
    case SET_TODO_INPUT:
      return {...state, todoInput: action.text}

    case ADD_TODO:
      const todoInput = state.todoInput
      return {...state, todos: [...state.todos, {text: todoInput}], todoInput: ''}
    default: 
      return state
  }
}


const store = createStore(reducer, initialState)

export default store
