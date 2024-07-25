import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password)
    }

    return ( 
        <form className="login" onSubmit={handleLogin}>
            <h3>Login</h3>

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

             <button>Login</button>
        </form>
     );
}
 
export default Login;