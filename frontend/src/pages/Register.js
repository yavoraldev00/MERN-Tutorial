import { useState } from "react"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleRegister = async (e) => {
        e.preventDefault();

        console.log(email, password)
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

             <button>Register</button>
        </form>
     );
}
 
export default Register;