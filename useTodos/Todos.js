import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
const init =()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const Todos = () => {

    const [state, dispatch] = useReducer(todoReducer, [],init);
    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(state));
    }, [state])
    
 

    const  handleAddTodo =(todo)=>{
        const action={
            type:'[TODO] Add todo',
            payload:todo
        }
        dispatch(action)
}

const handleDeleteTodo = (id)=>{    
dispatch({
        type:'[TODO] Remove todo',
        payload:id
    })
}

const handleToggleTodo = (id)=>{    
dispatch({
    type:'[TODO] Toggle todo',
    payload:id
})


console.log(id)
}

    return {
    state,  
    handleToggleTodo,
    handleDeleteTodo,
    handleAddTodo,
    Todoscount:state.length,
    PendingTodos:state.filter(todo => !todo.done).length
}
  }
