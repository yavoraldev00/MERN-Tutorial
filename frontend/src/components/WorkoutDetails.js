import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns (not installed with npm does not function correctly)
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    debugger;

    const handleDelete = async () => {
        const response = await fetch("http://localhost:4000/api/workouts/" + workout._id, {
            method: "DELETE"
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload: json})
        }
    }

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Sets: {workout.sets}</strong></p>
            <p><strong>Reps: {workout.reps}</strong></p>
            <p>Created at: workout.createdAt</p>
            <p>id: {workout._id}</p>
            <span onClick={handleDelete} className="material-symbols-outlined">Delete</span>
        </div>
     );
}
 
export default WorkoutDetails;