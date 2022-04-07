import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Contactbar from "../components/Contactbar";
import { styled } from "@mui/material/styles";
import img from "../images/course4.jpg"
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  textShadow: "2px 2px 4px #000000",
  boxShadow: "none",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "#545454",
  color: "#fff",
  boxShadow: "none",
  padding: theme.spacing(1),
}));

function Course4() {
  return (
    <div>
      <Head>
        <title>Abroad Prep</title>
        <meta name="description" content="In-Home Youth Prep Course." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@500&family=Prompt&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contactbar />
      <Header />
      <Stack
        sx={{ mt: "5vmin", width: "95%", mx: "auto" }}
        direction={{ xs: "column", sm: "row" }}
        textAlign={{ md: "left", xs: "center" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>
          <img
            src={img.src}
            alt=""
            className="pageimage"
          />
        </Item>
        <Item>
          <Typography sx={{ fontFamily: "Karla", fontSize: "5.4vmin" }}>
            LIVE Online Social Etiquette 
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Karla", fontSize: "3vmin" }}>
            -------------------------------------------------------------------------------
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Karla", fontSize: "5.4vmin" }}>
            Curriculum includes
          </Typography>
        </Item>
      </Stack>
      <Box sx={{justifyContent:"center",textAlign: "center", width: "95%", mx: "auto", mb:"3vmin" }}>
      <Stack
        sx={{ mt: "5vmin", width: "100%", mx: "auto" }}
        direction={{ xs: "column", sm: "row" }}
        textAlign={{ md: "center", xs: "center" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item2 sx={{width:"35vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Personal Presentation
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Dress to Feel Great
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Walk with Purpose
          </Typography>
        </Item2>
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Deportment
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Act Upon Your Goals
          </Typography>
        </Item2>
        <Item2 sx={{width:"15vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Empathy
          </Typography>
        </Item2>
      </Stack>
      <Stack
        sx={{ mt: "5vmin", width: "100%", mx: "auto" }}
        direction={{ xs: "column", sm: "row" }}
        textAlign={{ md: "center", xs: "center" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Be Thankful
          </Typography>
        </Item2>
        <Item2 sx={{width:"35vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Ask Different Questions
          </Typography>
        </Item2>
        <Item2 sx={{width:"25vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Compliments
          </Typography>
        </Item2>
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Speak Up
          </Typography>
        </Item2>
        <Item2 sx={{width:"25vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Healthy Lifestyle
          </Typography>
        </Item2>\
        <Item2 sx={{width:"25vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Contribution
          </Typography>
        </Item2>
      </Stack>
      <Stack
        sx={{ mt: "5vmin", width: "100%", mx: "auto" }}
        direction={{ xs: "column", sm: "row" }}
        textAlign={{ md: "center", xs: "center" }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item2 sx={{width:"40vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Environmental Influences
          </Typography>
        </Item2>
        <Item2 sx={{width:"25vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Memory Anchors
          </Typography>
        </Item2>
        <Item2 sx={{width:"15vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Manners
          </Typography>
        </Item2>
      </Stack>
      </Box>
    </div>
  );
}

export default Course4;
