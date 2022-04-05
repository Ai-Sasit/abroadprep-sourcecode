import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Contactbar from "../components/Contactbar";
import { styled } from "@mui/material/styles";
import img1 from "../images/mon.jpg"
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

function Course1() {
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
            src={img1.src}
            alt=""
            className="pageimage"
          />
        </Item>
        <Item>
          <Typography sx={{ fontFamily: "Karla", fontSize: "5.4vmin" }}>
            In-Home Youth Prep Course
          </Typography>
          <br />
          <Typography sx={{ fontFamily: "Karla", fontSize: "3vmin" }}>
            The polite and well-mannered children stand out from the crowd
            wherever it is.
            This tailor-made program is for children and teenagers between the
            ages of 12-18.
            The course focuses on the skills that give your child an advantage
            in the social arts by building confidence, deportment, self-esteem,
            respect for others, and good manners
            in an international standard. Children will understand other
            cultures and how to fit in.
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
        <Item2 sx={{width:"80vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            The importance of politeness (verbal, written, gestural)
          </Typography>
        </Item2>
        <Item2 sx={{width:"50vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            The table setting and table manners
          </Typography>
        </Item2>
        <Item2 sx={{width:"50vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Self-assurance and confidence
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
            Cross-Cultural Communication
          </Typography>
        </Item2>
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Hygiene
          </Typography>
        </Item2>
        <Item2 sx={{width:"20vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Greetings
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            The presentations
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Communicate well
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
            Empathy and respect
          </Typography>
        </Item2>
        <Item2 sx={{width:"30vmin"}}>
          <Typography sx={{ fontFamily: "Karla", fontSize: "2.6vmin" }}>
            Social Etiquette
          </Typography>
        </Item2>
      </Stack>
      </Box>
    </div>
  );
}

export default Course1;
