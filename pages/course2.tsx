import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Contactbar from "../components/Contactbar";
import { styled } from "@mui/material/styles";
import img from "../images/course2.jpg"
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

function Course2() {
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
            International Social Etiquette
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Karla", fontSize: "3vmin" }}>
            Grooming is about having elegance, grace, poise, and high self-esteem. 
            Confidence is emitted from the way you stand, walk, and sit. 
            You learn about what grooming and confidence can do for you. 
            You can signal clearly that your expectations for yourself are high, 
            so they should be to take your social skills to the next level.
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
        <Item2 sx={{width:"65vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Understanding the nature of self-confidence.
          </Typography>
        </Item2>
        <Item2 sx={{width:"50vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Self-presentation and authenticity.
          </Typography>
        </Item2>
        <Item2 sx={{width:"35vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Your overall appearance.
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
        <Item2 sx={{width:"55vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Confident conversation and networking.
          </Typography>
        </Item2>
        <Item2 sx={{width:"50vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Cross-cultural communication
          </Typography>
        </Item2>
        <Item2 sx={{width:"60vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Eye contact, body movements, and actions
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
        <Item2 sx={{width:"50vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Empathy and emotional intelligence
          </Typography>
        </Item2>
        <Item2 sx={{width:"60vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Social Media Etiquette (as age-appropriate)
          </Typography>
        </Item2>
        <Item2 sx={{width:"40vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Understanding your nature.
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
        <Item2 sx={{width:"80vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Developing increased self-esteem, poise, and relaxation.
          </Typography>
        </Item2>
      </Stack>
      </Box>
    </div>
  );
}

export default Course2;
