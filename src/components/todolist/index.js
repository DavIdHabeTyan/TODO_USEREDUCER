import React, { useReducer } from 'react';
import Todo from "../todo";

import { ACTIONS } from "../reducer";
import { reducer } from "../reducer";
import { initialState } from "../reducer";

const TodoList = () => {
    const [state, dispach] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Todo List</h1>
            <input
                value={state.input}
                type="text"
                onChange={(e) => dispach({type: ACTIONS.ADD_INPUT_VALUE, payload: {value: e.target.value}})}
            />
            <button onClick={() => dispach({type: ACTIONS.ADD_TODO})} >Add</button>

            {state.todos.map(todo=> <Todo
                {...todo}
                key={todo.id}
                ACTIONS={ACTIONS}
                dispatch={dispach}
            />)}
            <button>Delete Completed</button>
        </div>
    );
};

export default TodoList;