const WorkoutDetails = ({ workout }) => {
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Sets: {workout.sets}</strong></p>
            <p><strong>Reps: {workout.reps}</strong></p>
            <p>Created at: {workout.createdAt}</p>
            <p>id: {workout._id}</p>
        </div>
     );
}
 
export default WorkoutDetails;