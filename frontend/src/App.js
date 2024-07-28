import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const user = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user.user ? <Home /> : <Navigate to="/login" /> }/>
            <Route path="/login" element={!user.user ? <Login /> : <Navigate to="/" />}/>
            <Route path="/register" element={!user.user ? <Register /> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
