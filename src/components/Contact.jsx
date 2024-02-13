import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardMedia, Container, Grid, Stack } from "@mui/material";
import twlogo from "../assets/tgicon.png";
import dclogo from "../assets/dclogo.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 2500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container
      className={
        scrolled && !(window.innerWidth <= 600) ? "animate" : "noAnimation"
      }
      maxWidth="lg"
      sx={{
        mt: { xs: 10, lg: 40, md: 30 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "JetBrains Mono",
          textAlign: "center",
          fontSize: { xs: "3rem", lg: "3rem" },
        }}
      >
        CONTACT US
      </Typography>
      <Card sx={{ bgcolor: "transparent", color: "#fff" }} width="100%">
        <Grid
          container
          spacing={2}
          my={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6}>
            <Stack
              flexDirection="row"
              useFlexGap
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia
                component="img"
                src={twlogo}
                alt={"TwitchLogo"}
                sx={{ width: "210px", height: "250px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Telegram</Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1rem" } }}>
                  <Link
                    to="https://telegram.org/"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "JetBrains Mono",
                    }}
                  >
                    westbossx
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              flexDirection="row"
              useFlexGap
              gap={3}
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia
                component="img"
                src={dclogo}
                alt={"DiscordLogo"}
                sx={{ width: "210px", height: "250px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5">Discord</Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1rem" } }}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "JetBrains Mono",
                    }}
                    to="https://telegram.org/"
                  >
                    westboss.
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Contact;
