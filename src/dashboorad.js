import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Headers from "./headers";
import { Mycontext } from "./createcontext";
import Content from "./content";

const Dashborad = () => {
  const dynamicrender = [
    { title: "step1", compoent: () => <div>{" i am setp 1"}</div> },
    { title: "step2", compoent: () => <div>{" i am setp 2"}</div> },
    { title: "step3", compoent: () => <div>{" i am setp 3"}</div> },
    { title: "step4", compoent: ({name}) => <div>{" i am setp 4"}{name}</div> },
  ];
  const [selectindex,setselctindex]=useState(0)
  console.log("selectindex",selectindex);
  const [disabled,setdisabled]=useState(false)
  const handleSelected=()=>{
    if(selectindex===dynamicrender.length){
      setdisabled(true)
      return ;
    }else{
      setselctindex(selectindex+1)
    }
    
  }
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
      {dynamicrender.map((item,index)=>{
       
        if(index ===selectindex){
        //console.log("item.compoent", item.compoent);
       return  (<>
        <button onClick={handleSelected} disabled={disabled}>next</button>
       <item.compoent name={"aravinda"}/>
       </>)
        }else{
          // return  <button onClick={handleSelected} disabled={disabled}>next</button>
        }
      })}
    </Box>
  );
};

export default Dashborad;
