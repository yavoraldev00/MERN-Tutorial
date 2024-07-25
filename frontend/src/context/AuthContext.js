import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state;
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("Auth state - ", authState)

    return (
        <WorkoutsContext.Provider value={{...authState, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}