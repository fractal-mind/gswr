import React from 'react';
import ReactDOM from 'react-dom';


const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== state.id) {
      return state;
      }

      return  Object.assign({}, state, {
      completed: !state.completed
      })
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return  [
          ...state,
          todo(null, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  };
};


const TodoList = ({state, onAddTodo}) => (
  <div>
    <h1>Hey</h1>
    <button onClick={onAddTodo}></button>
  </div>
);



import { createStore } from 'redux';
const store = createStore(todos);

const render = () => {
  ReactDOM.render(
    <TodoList
      state={store.getState()}
      onAddTodo={() => store.dispatch({type: 'ADD_TODO'})}
      />,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();
