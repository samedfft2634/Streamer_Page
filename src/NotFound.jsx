import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ErrorImg from "./assets/error.png";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontFamily: "JetBrains Mono",
              }}
            >
              404
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "JetBrains Mono", color: "white" }}
            >
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
              <Button variant="contained">Back Home</Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img src={ErrorImg} alt="" width={500} height={250} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
