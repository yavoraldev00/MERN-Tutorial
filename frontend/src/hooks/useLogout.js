import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { payload, dispatch: workoutDispatch } = useWorkoutsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user")

        // dispatch logout action
        dispatch({type: "LOGOUT"})

        // unloads currently loaded user blogs
        workoutDispatch({payload:null, type:"SET_WORKOUTS"})
    }

    return {logout}
}