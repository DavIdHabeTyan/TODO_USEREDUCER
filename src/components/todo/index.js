import React from 'react';

const Todo = ({title, id, isDone, dispatch, ACTIONS, isCompleted,}) => {


    function test (id) {
        dispatch({
            type: ACTIONS.IS_CHECKED,
            payload: {id}
        })
        console.log(id, "mtnuma")

    }

    return (
        <div>
            <input
                value={isCompleted}
                type="checkbox"
                // onChange={() => dispatch({ type: ACTIONS.CHENG_COMPLETED, payload:{ id }})}
            />
            <span className={isDone ? "isDone" : ""}  onClick={() => test(id)}>{title}</span>
            <button>Edit</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload:{ id }})} >Delete</button>
            
            
        </div>
    );
};

export default Todo;