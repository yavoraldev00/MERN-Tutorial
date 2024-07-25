import { useState } from "react"
import { useRegister } from "../hooks/useRegister"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { register, error, isLoading } = useRegister();


    const handleRegister = async (e) => {
        e.preventDefault();

        await register(email, password);
    }

    return ( 
        <form className="signup" onSubmit={handleRegister}>
            <h3>Register</h3>

            <label>E-mail</label>
            <input 
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
             />

            <label>Password</label>
            <input 
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
             />

             <button disabled={isLoading}>Register</button>
             {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default Register;