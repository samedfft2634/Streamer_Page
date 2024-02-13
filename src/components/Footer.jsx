import * as React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AdbIcon from "@mui/icons-material/Adb";
import ScrollUpButton from "react-scroll-up-button";

const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

const Footer = () => {
  return (
    <Box
      sx={{
        color: "white",
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              <AdbIcon
                sx={{
                  display: { xs: "none", md: "flex", color: "white" },
                  mr: 1,
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              color="#fff"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              PRODUCT
            </Typography>
            <Link
              href="#"
              color="#fff"
              display="block"
              style={{ textDecoration: "none" }}
            >
              Features
            </Link>
            <Link
              href="#"
              color="#fff"
              display="block"
              style={{ textDecoration: "none" }}
            >
              Integrations
            </Link>
            <Link
              href="#"
              color="#fff"
              display="block"
              style={{ textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link
              href="#"
              color="#fff"
              display="block"
              style={{ textDecoration: "none" }}
            >
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              color="#fff"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              COMPANY
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              style={{ textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              style={{ textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              style={{ textDecoration: "none" }}
            >
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              color="#fff"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
      <ScrollUpButton
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      ></ScrollUpButton>
    </Box>
  );
};

export default Footer;
