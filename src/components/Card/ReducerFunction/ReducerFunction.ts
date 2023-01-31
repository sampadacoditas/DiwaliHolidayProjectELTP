// import { useReducer } from "react";

export const reducer = (state:any, action:any) => {
    // console.log(state)
    switch (action.type) {
        case 'planned':
            action.payload.status="planned"
            state=[...state]
            return state

        case 'floater':
           action.payload.status="floater"
            return [...state] 
            
        case "all":
            action.payload.status="all"
            return[...state]           
        default:
            return state
            
       
    }
};