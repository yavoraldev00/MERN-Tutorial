import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch(action.type){
        case "SET_WORKOUTS":
            return {
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state;
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [workoutState, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{...workoutState, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}