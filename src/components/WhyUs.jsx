import React, { useEffect, useState } from "react";
import Border1 from "../assets/border1.svg";
import Border2 from "../assets/border2.svg";
import Whyicon from "../assets/mark.png";

import { Box, Container, Stack, Typography } from "@mui/material";

const WhyUs = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1000) {
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
      sx={{ pt: 5 }}
      className={
        scrolled && !(window.innerWidth <= 600) ? "animate" : "noAnimation"
      }
    >
      <Box
        sx={{
          margin: "60px auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img src={Whyicon} width={300} height={300}></img>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "30px",
          padding: { xs: "20px", lg: "50px" },
        }}
      >
        <Box
          sx={{
            display: { xl: "flex", xs: "none" },
          }}
        >
          <img src={Border2} alt="" />
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "#ffff",
              textAlign: "center",
              fontFamily: "JetBrains Mono",
              fontSize: { xs: "3rem" },
            }}
          >
            WHY US
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontFamily: "JetBrains Mono",
              margin: "20px auto",
              textAlign: "left",
            }}
          >
            With our seasoned and skilled team, we excel in optimizing your bots
            to unparalleled standards, streamlining your operations
            effortlessly. Backed by four years of industry expertise, we deliver
            dependable and top-notch services to our clientele. Crafting
            tailored solutions for your unique needs, we elevate the efficiency
            of your workflow at every turn. Customer satisfaction remains our
            utmost priority, as we dedicate ourselves to delivering optimal
            outcomes for you. Rest assured, your privacy is treated with the
            utmost care and importance by us!
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xl: "flex", xs: "none" },
          }}
        >
          <img src={Border1} alt="" />
        </Box>
      </Stack>
    </Container>
  );
};

export default WhyUs;
