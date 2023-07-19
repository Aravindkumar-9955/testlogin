import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rajini from "./Assets/rajinisir.jpg";
const Profile = () => {
  const { state } = useLocation();
  const [video, setvideo] = useState(false);
  console.log("state", video);

  useEffect(() => {
    setTimeout(() => {
      setvideo(true);
    }, 3000);
  }, []);
  return (
    <Box>
      {video === true ? (
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography sx={{ fontSize: "50px", fontFamily: "Indie Flower" }}>
            {"Rajinikanth Sir"}
          </Typography>
          <iframe
            style={{ marginTop: "40px" }}
            width="90%"
            height="550"
            src="https://www.youtube.com/embed/1F3hm6MfR1k?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allow="autoplay"
            allowfullscreen
          ></iframe>
        </Box>
      ) : (
        <Box sx={{ mt: 9, textAlign: "center" }}>
          <img src={Rajini} alt="Rajini" />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
