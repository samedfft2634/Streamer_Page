import React, { useEffect, useState } from "react";
import Lock from "../assets/lock.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Border1 from "../assets/border1.svg";
import Border2 from "../assets/border2.svg";

const Secret = () => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    color: "white",
    fontFamily: "JetBrains Mono",
    padding: "30px",
    fontSize: { xs: "2.5rem" },
    textAlign: "center",
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1500) {
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
      maxWidth={"lg"}
      className={
        scrolled && !(window.innerWidth <= 600) ? "animate" : "noAnimation"
      }
    >
      <Stack>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={Lock} alt="" width={300} height={300} />
        </Box>
        <Box sx={{ display: "flex", margin: "auto", alignItems: "center" }}>
          <Box
            sx={{
              display: { xl: "flex", xs: "none" },
            }}
          >
            <img src={Border2} alt="" />
          </Box>
          <Box>
            <Typography variant="h3" sx={styles}>
              We care about privacy.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xl: "flex", xs: "none" },
            }}
          >
            <img src={Border1} alt="" />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Secret;
