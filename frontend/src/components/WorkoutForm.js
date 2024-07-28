import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";


const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!user){
          return setError("Log-in to add workouts")
        }

        const workout = {title, sets, reps}

        const response = await fetch("http://localhost:4000/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
                "Authorization": user.token
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.mssg)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle("")
            setSets("")
            setReps("")
            setError(null)

            console.log("New workout added!", json)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New Workout</h3>
  
        <label>Excersize Title:</label>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          className={emptyFields.includes("title") ? "error"  : ""}
        />
  
        <label>Sets:</label>
        <input 
          type="number" 
          onChange={(e) => setSets(e.target.value)} 
          value={sets}
          className={emptyFields.includes("sets") ? "error"  : ""}
        />
  
        <label>Number of Reps:</label>
        <input 
          type="number" 
          onChange={(e) => setReps(e.target.value)} 
          value={reps}
          className={emptyFields.includes("reps") ? "error"  : ""}
        />
  
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
     );
}
 
export default WorkoutForm;