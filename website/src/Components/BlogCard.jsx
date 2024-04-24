import * as React from "react";
import { Card, CardContent, Typography } from "@mui/joy";

const BlogCard = ({ title, imageSrc, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 350,
        height: 300,
        border: "5px solid #195468",
        borderRadius: 10,
        cursor: "pointer",
        backgroundColor: "#FCF5D9",
        transition: "transform 0.3s, background-color 0.3s, color 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "#F09C50",
          color: "white",
        },
      }}
    >
      <img src={imageSrc} style={{ maxWidth: 120, maxHeight: 120 }} />
      <CardContent>
        <Typography level="h2" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
