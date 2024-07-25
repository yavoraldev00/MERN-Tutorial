import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext();

    const register = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/api/user/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save user to local storage
            localStorage.setItem("user", JSON.stringify(json))
            
            // update auth context
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)

            console.log("Successfull")
            console.log(json)
            debugger;
        }
    }

    return { register, isLoading, error }
}
 