import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")

    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const workout = {title, sets, reps}

        const response = await fetch("http://localhost:4000/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.mssg)
            debugger;
        }
        if(response.ok){
            setTitle("")
            setSets("")
            setReps("")
            setError(null)

            console.log("New workout added!", json)
            debugger;
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
        />
  
        <label>Sets:</label>
        <input 
          type="number" 
          onChange={(e) => setSets(e.target.value)} 
          value={sets}
        />
  
        <label>Number of Reps:</label>
        <input 
          type="number" 
          onChange={(e) => setReps(e.target.value)} 
          value={reps} 
        />
  
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
     );
}
 
export default WorkoutForm;