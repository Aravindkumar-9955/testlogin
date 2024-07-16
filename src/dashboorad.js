import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Headers from "./headers";
import { Mycontext } from "./createcontext";
import Content from "./content";

const Dashborad = () => {

  return (
    <Box>
      {/* Navebar */}
      <Headers />
      <Box
        sx={{
          background: "#fb618640",
          width: "100%",
          height: "80px",
          display: "flex",
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: "cursive", fontSize: "50px" }}>
            Aravindha
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography>Home</Typography>
          </Box>
          <Box>
            <Typography>About</Typography>
          </Box>
          <Box>
            <Typography>Carrer</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", width: "100%" }}>
        {/* sidebar */}
        <Box sx={{ width: "300px", background: "#00ff0854" }}>
          <Typography>sidebar</Typography>
        </Box>

        {/* main secion*/}
        <Box sx={{ background: "#ed61fb1f", width: "90%" }}>
          <Typography>hi</Typography>
        </Box>
      </Box>
      <Content />
    </Box>
  );
};

export default Dashborad;
