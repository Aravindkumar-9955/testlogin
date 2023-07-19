import "./App.css";
import Login from "./Logins.js";
import Profile from "./profile";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboorad";
function App() {
  return (
    <div className="App">
      <div>{/* <Link to="/profile">check</Link> */}</div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
