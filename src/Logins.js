import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import loginIcon from "./Assets/icon.jpg";
import loginIcon1 from "./Assets/AravindhaICon.jpg";
import loginIcon2 from "./Assets/ara.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigator = useNavigate();
  const loginSumbit = () => {
    let object = {};
    if (userName === "aravindha" && password === "1234") {
      object.username = userName;
      object.password = password;
      console.log("object", object);
      navigator("/profile", { state: object });
      setError("");
    } else {
      setError("Please Enter correct username password");
    }
    if (userName === "kokki" && password === "1995") {
      object.username = userName;
      object.password = password;
      console.log("object", object);
      navigator("/dashboard", { state: object });
      setError("");
    } else {
      setError("Please Enter correct username password");
    }

    return object;
  };

  const handleKeyDown = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      console.log("✅ Enter key pressed");
      loginSumbit();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "700px",
          background: "#ffe5e5",
          mt: 10,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "50px", fontFamily: "Cursive" }}>
            Login to AKK Page
          </Typography>
        </Box>
        <Box>
          {userName.length > 0 ? (
            <img
              src={loginIcon1}
              alt="loginIcon"
              style={{
                display: password.length > 0 ? "none" : "",
              }}
            />
          ) : (
            <img
              src={loginIcon}
              alt="loginIcon"
              style={{
                display: password.length > 0 ? "none" : "",
              }}
            />
          )}
          {password.length > 0 && (
            <img
              src={loginIcon2}
              alt="loginIcon"
              style={{ width: "50%", opacity: 1 }}
            />
          )}
        </Box>
        <Box sx={{}}>
          <Typography sx={{ fontFamily: "Cursive" }}>UserName</Typography>
          <input
            type="text"
            style={{
              width: "300px",
              marginTop: "5px",
              padding: 5,
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
        <Box>
          <Typography sx={{ fontFamily: "Cursive" }}>Password</Typography>
          <input
            type="password"
            style={{
              width: "300px",
              marginTop: "5px",
              padding: 5,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
        {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        <Box sx={{ mt: 1, mb: 1 }}>
          <Button
            onClick={loginSumbit}
            style={{
              background: "#ffcf00",
              borderRadius: "4px unset",
              textTransform: "capitalize",
            }}
          >
            sign In{" "}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
