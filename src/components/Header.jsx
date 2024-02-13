import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
const Header = () => {
  const type = {
    color: "white",
    fontFamily: "JetBrains Mono",
    fontSize: "4rem",
    margin: "auto",
    ml: { lg: "20px", sm: "0px" },
    maxWidth: "600px",
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
      margin: "20px auto",
    },
  };
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    "@media (max-width:600px)": {
      gap: "30px",
    },
  };
  return (
    <Stack
      className="headerComp"
      sx={{
        margin: "60px auto",
        height: "calc(69vh - 80px)",
        maxWidth: "1500px",
        justifyContent: "space-between",
        "@media (max-width:1440px)": {
          height: "calc(69vh - 130px)",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            ...styles,
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            marginTop: { md: "30px", xl: "150px" },
          }}
        >
          <Typography component="h1" className="headerText" sx={type}>
            <span className="animate">
              {" "}
              LET US PROVIDE ALL YOUR SOCIAL MEDIA BOTS.
            </span>
          </Typography>
          <img
            src="https://berichwithme.com/public/storage/fg5663.svg"
            loading="lazy"
            className={window.innerWidth <= 600 ? "noAnimation" : ""}
            style={{
              width: "500px",
              marginRight: "120px",
              margin: "auto",
              maxWidth: "90%",
              animation: "myAnim 2s ease 0s 1 normal forwards",
            }}
          />
        </Box>
        <Typewriter
          options={{
            strings: ['<h1 class="typewriter">BE RICH WITH ME!..</h1>'],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>
    </Stack>
  );
};

export default Header;
