import * as React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BlogCard from "./Components/BlogCard";
import Typography from "@mui/joy/Typography";
import blogs from './Data/blog.json'; // Make sure the path matches where your JSON file is located

const Explore = () => {
  const [view, setView] = React.useState("list");
  const [selectedBlog, setSelectedBlog] = React.useState(null);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setView("blog");
  };

  return (
    <div>
      <NavBar />
      {view === "list" && (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px 50px" }}>
          {blogs.map(blog => (
            <div key={blog.title} style={{ flex: "1 0 21%", margin: "10px" }}> {/* Adjusted margin for reduced spacing */}
              <BlogCard
                title={blog.title}
                imageSrc={blog.image_src}
                onClick={() => handleCardClick(blog)}
              />
            </div>
          ))}
        </div>
      )}
      {view === "blog" && selectedBlog && (
        <>
          <Typography
            level="h1"
            sx={{ textAlign: "center", pt: 5, fontSize: "3rem", paddingBottom: "40px", color: "#195468" }}
          >
            {selectedBlog.title}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={selectedBlog.image_src}
              alt={selectedBlog.title}
              style={{ maxWidth: 800, maxHeight: 800 }}
            />
          </div>
          <Typography
            level="body-lg"
            sx={{
              textAlign: "center",
              px: 25,
              pt: 2.5,
              fontSize: "1.5rem",
            }}
          >
            {selectedBlog.text}
          </Typography>
        </>
      )}
      <div style={{ paddingTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
