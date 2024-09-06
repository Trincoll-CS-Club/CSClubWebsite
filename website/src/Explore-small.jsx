import * as React from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Typography from "@mui/joy/Typography";
import BlogCard from "./Components/BlogCard";
import blogs from "./Data/blog.json";

const Explore = ({ initialBlog, onBackToHome }) => {
  const [selectedBlog, setSelectedBlog] = React.useState(initialBlog);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "100px" }}>
      <NavBar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {selectedBlog ? (
          // Single blog view
          <>
            <Typography
              level="h1"
              sx={{
                textAlign: "center",
                pt: 5,
                fontSize: "3rem",
                paddingBottom: "40px",
                color: "#195468",
              }}
            >
              {selectedBlog.title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
              <img
                src={selectedBlog.image_src}
                alt={selectedBlog.title}
                style={{ maxWidth: "100%", height: "auto", maxHeight: "600px", objectFit: "cover" }}
              />
            </div>
            <Typography
              level="body-lg"
              sx={{ textAlign: "justify", fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "40px" }}
            >
              {selectedBlog.text}
            </Typography>
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "60px" }}>
              <button 
                onClick={handleBackToList} 
                style={{ 
                  padding: "12px 24px", 
                  fontSize: "1rem", 
                  cursor: "pointer", 
                  backgroundColor: "#15616D", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1A7A8B"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#15616D"}
              >
                Back to Blog List
              </button>
            </div>
          </>
        ) : (
          // Blog list view
          <>
            <Typography
              level="h1"
              sx={{
                textAlign: "center",
                pt: 5,
                fontSize: "3rem",
                paddingBottom: "40px",
                color: "#195468",
              }}
            >
              Explore Our Blogs
            </Typography>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
              {blogs.map(blogItem => (
                <div key={blogItem.id} style={{ width: "calc(33.333% - 20px)", minWidth: "250px" }}>
                  <BlogCard
                    title={blogItem.title}
                    imageSrc={blogItem.image_src}
                    onClick={() => handleSelectBlog(blogItem)}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "60px" }}>
              <button 
                onClick={onBackToHome} 
                style={{ 
                  padding: "12px 24px", 
                  fontSize: "1rem", 
                  cursor: "pointer", 
                  backgroundColor: "#15616D", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px",
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1A7A8B"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#15616D"}
              >
                Back to Home
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;