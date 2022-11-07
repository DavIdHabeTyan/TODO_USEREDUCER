export const initialState = {
    input: "",
    todos: [],
    editeMode: {
        inputEditeMode: "",
        editeId: "",
    }
}
export const ACTIONS = {
    ADD_INPUT_VALUE: "ADD_VALUE",
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    IS_CHECKED: "IS_CHECKED",
    CHENG_COMPLETED: "CHENG_COMPLETED",
    DELETE_COMPLETED: "DELETE_COMPLETED",

}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_INPUT_VALUE: {
            return {...state, input: action.payload.value}
        }
        case ACTIONS.ADD_TODO: {
            return {
                ...state,
                input: "",
                todos: [...state.todos, {id: Date.now(), title: state.input, isDone: false, isCompleted: false}]
            }
        }
        case ACTIONS.DELETE_TODO: {
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
        }

        case ACTIONS.CHENG_COMPLETED: {
            const {id} = action.payload
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }
        }
        case ACTIONS.DELETE_COMPLETED: {
            return {...state, todos: state.todos.filter(todo => !todo.isCompleted)}
        }
        case ACTIONS.IS_CHECKED: {
            const {payload: { id }} = action;
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })
            }
        }
        default: return state;
    }
}