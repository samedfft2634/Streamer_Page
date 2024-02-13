import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";

export default function PlatformCards({ item }) {
  const { icon, title } = item;
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 0,
        backgroundColor: "transparent",
        border: "none",
        transition: "transform 0.4s",
        "&:hover": {
          transform: "rotateY(30deg)",
          "& > div:nth-of-type(2)": {
            transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
          },
          "& > div:nth-of-type(3)": {
            transform: "translate3d(45px, 50px, 40px)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          image={icon}
          alt={title}
          sx={{ width: "150px", height: "150px", objectFit: "contain" }}
        />
      </Box>
    </Card>
  );
}
