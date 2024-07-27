import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";


// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const {dispatch, workouts} = useWorkoutsContext();
    // const {user} = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const user = JSON.parse(localStorage.getItem('user'))
            const token = user.token;

            const response = await fetch("http://localhost:4000/api/workouts", {headers: {authorization: `${token}`}})
            const json = await response.json()

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }
        }

        fetchWorkouts();
    }, [dispatch])

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails id={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;