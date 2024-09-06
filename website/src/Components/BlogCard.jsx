import * as React from "react";
import { Card, CardContent, Typography } from "@mui/joy";

const BlogCard = ({ title, imageSrc, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 350,
        height: 400,
        border: "5px solid #15616D",
        borderRadius: 10,
        cursor: "pointer",
        backgroundColor: "#FFECD1",
        transition: "transform 0.3s, background-color 0.3s, color 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor: "#FF7D00",
          color: "white",
        },
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ width: '100%', height: 200, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography level="h2" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
