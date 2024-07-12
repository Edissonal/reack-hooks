import { useState } from "react";


export const useForm = (inicialForm={}) => {
    
    const [formState, setformState] = useState(inicialForm);


const onInputChange =({target})=>{
const {name,value} =target;
 setformState({
    ...setformState,
    [name]:value
 })
}

const onRsesetForm=()=>{
    setformState(inicialForm)

}

return {
 ...formState,  
 formState,
 onInputChange,
 onRsesetForm
}
}



