import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/api/workouts")

            const json = await response.json()

            if(response.ok){
                debugger;
                setWorkouts(json)
            }else{
                debugger;
            }
        }

        fetchWorkouts();
    }, [])

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails id={workout._id} workout={workout} />
                ))}
            </div>
        </div>
     );
}
 
export default Home;