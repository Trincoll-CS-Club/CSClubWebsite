import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import blogs from './Data/blog.json';

const BlogPost = ({ id, onBackToExplore }) => {
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return <Typography level="h2">Blog post not found</Typography>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Button onClick={onBackToExplore} sx={{ mb: 2 }}>Back to Explore</Button>
      <Typography
        level="h1"
        sx={{ textAlign: "center", pt: 5, fontSize: "3rem", paddingBottom: "40px", color: "#195468" }}
      >
        {blog.title}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <img
          src={blog.image_src}
          alt={blog.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <Typography
        level="body-lg"
        sx={{
          textAlign: "justify",
          fontSize: "1.2rem",
          lineHeight: 1.6,
        }}
      >
        {blog.text}
      </Typography>
    </div>
  );
};

export default BlogPost;