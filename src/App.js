import "./App.css";
import Login from "./Logins.js";
import Profile from "./profile";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboorad";
import { Mycontext } from "./createcontext";
import { useState } from "react";

function App() {
  const [Color,setColour]=useState("light")
  const handletoogle=()=>{
    setColour((prev)=>prev==="light"?"dark":"light")
  }
  return (
    <Mycontext.Provider value={{Color,handletoogle}}>
    <div className="App">
      <div>{/* <Link to="/profile">check</Link> */}</div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
       

        <>
        <Route exact path="/dashboard" element={<Dashboard />} />
        </>
       
      </Routes>
    </div>
    </Mycontext.Provider>
  );
}

export default App;
