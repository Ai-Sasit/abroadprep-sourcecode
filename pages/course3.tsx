import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Contactbar from "../components/Contactbar";
import { styled } from "@mui/material/styles";
import img from "../images/course3.jpg"
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

function Course3() {
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
            Global Elite
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Karla", fontSize: "3vmin" }}>
            Timeless image, etiquette, protocol, and manners will augment your personal and professional appearance. 
            This tailor-made training experience presents yourself at your personal and professional best.
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
            Building relationships
          </Typography>
        </Item2>
        <Item2 sx={{width:"55vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Winning image. Personal presentation
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Dress for success
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Tea break etiquette 
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
            Cross-cultural communication essentials. Meet and greet
          </Typography>
        </Item2>
        <Item2 sx={{width:"65vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Understanding the nature of self-confidence
          </Typography>
        </Item2>
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Voice clinic
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
        <Item2 sx={{width:"45vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            International communication
          </Typography>
        </Item2>
        <Item2 sx={{width:"55vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Polished movements and deportment
          </Typography>
        </Item2>
        <Item2 sx={{width:"40vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Confident conversation
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Body language
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
            First impressions mastery
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Dining etiquette
          </Typography>
        </Item2>
        <Item2 sx={{width:"35vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Wine and food pairing
          </Typography>
        </Item2>
        <Item2 sx={{width:"35vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Entertainment essentials
          </Typography>
        </Item2>
        <Item2 sx={{width:"40vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Cultural and art appreciation
          </Typography>
        </Item2>
      </Stack>
      </Box>
    </div>
  );
}

export default Course3;
