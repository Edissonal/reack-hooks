export const todoReducer=(initialstate =[],action)=>{

    switch (action.type) {
        case '[TODO] Add todo':  
        return[...initialstate,action.payload];
        case '[TODO] Remove todo':  
        return  initialstate.filter(todo => todo.id !== action.payload)
        case '[TODO] Toggle todo':  
        return  initialstate.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }
            return todo;
        })
        default:
            return initialstate;
    }

}