import {createStore} from 'redux'
import {SET_TODO_INPUT} from './actions'

const initialState = {
  todoInput: ''
}

const reducer = (state, action) => {
  console.log(state)
  switch(action.type) {
    case SET_TODO_INPUT:
      return {...initialState, todoInput: action.text}
    default: 
      return state
  }
}


const store = createStore(reducer, initialState)

export default store
