import type { NextPage } from "next";
import Head from "next/head";
import img1 from "../images/mon.jpg"
import img2 from "../images/di.jpg"
import img3 from "../images/tri.jpg"
import img4 from "../images/quad.jpg"

import Header from "../components/Header";
import Contactbar from "../components/Contactbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FacebookShareButton } from "react-share";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { isBrowser } from "react-device-detect";
import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    success: {
      main: "#ecd271",
    },
    info: {
      main: "#5e90c9",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  textShadow: "2px 2px 4px #000000",
  boxShadow: "none",
}));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abroad Prep</title>
        <meta
          name="description"
          content="Abroad-prep leverages your potential to fly high."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@500&family=Prompt&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Contactbar />
          <Header />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            textAlign={{ md: "left", xs: "center" }}
            sx={{ mt: 10, mx: "auto", color: "#fff", width: "90%" }}
          >
            <Item>
              <img src={logo.src} className="logo" alt="logo" />
            </Item>
            <Item>
              <Typography
                sx={{
                  fontFamily: "Karla",
                  fontSize: "9vmin",
                  fontWeight: "bold",
                }}
              >
                Abroad-prep
              </Typography>
              <Typography sx={{ fontFamily: "Karla", fontSize: "5.4vmin" }}>
                leverages your potential to fly high.
              </Typography>
              <Typography
                sx={{ mt: 2, fontFamily: "Karla", width:"86%", fontSize: "3vmin" }}
              >
                We believe that you are unique and can be your own best style.
                Abroad-prep training courses enhance confidence and fulfill your
                potential when you prepare to live abroad. We are passionate
                about making a better world through the traditional principles
                of kindness, respect, and consideration for others.
              </Typography>
              <Typography
                sx={{ mt: 2, fontFamily: "Karla", fontSize: "3vmin" }}
              >
                Contact abroad-prep to find out your personalized training or
                detail of our courses.
              </Typography>
            </Item>
          </Stack>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Box
            id="detail"
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Typography
              variant="h6"
              sx={{ fontFamily: "Karla", color: "white", fontSize: "7vmin" }}
            >
              FIND YOUR PERFECT COURSE
            </Typography>
            <ThemeProvider theme={theme}>
              <Grid
                container
                sx={{
                  m: "auto",
                  mt: 5,
                  mb: 5,
                  justifyContent: "center",
                  color: "#fff",
                  width: "95vw",
                }}
                spacing={1}
              >
                <Card
                  sx={{
                    width: "70vmin",
                    m: 3,
                    backgroundColor: "#54545480",
                    borderRadius: "0px",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={img1.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "#fff" }}
                      variant="h5"
                      component="div"
                    >
                      In-Home Youth Prep Course
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff" }}
                      color="text.secondary"
                    >
                      Length: 6-hour training Option: To study English courses
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", mb: "2vmin" }}>
                    <Link href="/course1">
                      <Button
                        size="large"
                        sx={{ borderRadius: "0px" }}
                        variant="contained"
                        startIcon={<InfoIcon />}
                        color="success"
                      >
                        Detail
                      </Button>
                    </Link>
                    <FacebookShareButton
                      url={"http://abroad-prep.com/course1"}
                      quote={"In-Home Youth Prep Course."}
                      hashtag={"#AbroadPrep"}
                    >
                      <Tooltip title="Facebook Share">
                        <Button
                          size="large"
                          variant="contained"
                          sx={{ borderRadius: "0px" }}
                          endIcon={<ShareIcon />}
                          color="info"
                        >
                          Share
                        </Button>
                      </Tooltip>
                    </FacebookShareButton>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    width: "70vmin",
                    m: 3,
                    backgroundColor: "#54545480",
                    borderRadius: "0px",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={img2.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "#fff" }}
                      variant="h5"
                      component="div"
                    >
                      International Social Etiquette
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff" }}
                      color="text.secondary"
                    >
                      Length: 6-hour training
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", mb: "2vmin" }}>
                    <Link href="/course2">
                      <Button
                        size="large"
                        variant="contained"
                        sx={{ borderRadius: "0px" }}
                        startIcon={<InfoIcon />}
                        color="success"
                      >
                        Detail
                      </Button>
                    </Link>
                    <FacebookShareButton
                      url={"http://abroad-prep.com/course2"}
                      quote={"International Social Etiquette."}
                      hashtag={"#AbroadPrep"}
                    >
                      <Tooltip title="Facebook Share">
                        <Button
                          size="large"
                          variant="contained"
                          sx={{ borderRadius: "0px" }}
                          endIcon={<ShareIcon />}
                          color="info"
                        >
                          Share
                        </Button>
                      </Tooltip>
                    </FacebookShareButton>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    width: "70vmin",
                    m: 3,
                    backgroundColor: "#54545480",
                    borderRadius: "0px",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={img3.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "#fff" }}
                      variant="h5"
                      component="div"
                    >
                      Global Elite
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff" }}
                      color="text.secondary"
                    >
                      Length: 6-hour training in Five Stars Hotel
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", mb: "2vmin" }}>
                    <Link href="/course3">
                      <Button
                        size="large"
                        variant="contained"
                        sx={{ borderRadius: "0px" }}
                        startIcon={<InfoIcon />}
                        color="success"
                      >
                        Detail
                      </Button>
                    </Link>
                    <FacebookShareButton
                      url={"http://abroad-prep.com/course3"}
                      quote={"Global Elite."}
                      hashtag={"#AbroadPrep"}
                    >
                      <Tooltip title="Facebook Share">
                        <Button
                          size="large"
                          variant="contained"
                          sx={{ borderRadius: "0px" }}
                          endIcon={<ShareIcon />}
                          color="info"
                        >
                          Share
                        </Button>
                      </Tooltip>
                    </FacebookShareButton>
                  </CardActions>
                </Card>
                <Card
                  sx={{
                    width: "70vmin",
                    m: 3,
                    backgroundColor: "#54545480",
                    borderRadius: "0px",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={img4.src}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      sx={{ color: "#fff" }}
                      variant="h5"
                      component="div"
                    >
                      Live Online Social Etiquette
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#fff" }}
                      color="text.secondary"
                    >
                      Length: 2-hour interactive online private training
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", mb: "2vmin" }}>
                    <Link href="/course4">
                      <Button
                        size="large"
                        variant="contained"
                        sx={{ borderRadius: "0px" }}
                        startIcon={<InfoIcon />}
                        color="success"
                      >
                        Detail
                      </Button>
                    </Link>
                    <FacebookShareButton
                      url={"http://abroad-prep.com/course4"}
                      quote={"Live Online Social Etiquette."}
                      hashtag={"#AbroadPrep"}
                    >
                      <Tooltip title="Facebook Share">
                        <Button
                          size="large"
                          variant="contained"
                          sx={{ borderRadius: "0px" }}
                          endIcon={<ShareIcon />}
                          color="info"
                        >
                          Share
                        </Button>
                      </Tooltip>
                    </FacebookShareButton>
                  </CardActions>
                </Card>
              </Grid>
            </ThemeProvider>
          </Box>
        </div>
      </main>
    </>
  );
};

export default Home;
