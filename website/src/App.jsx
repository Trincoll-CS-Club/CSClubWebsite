import * as React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Typography from "@mui/joy/Typography";
import InfoCard from "./Components/InfoCard";
import Card from "@mui/joy/Card";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Video from "./Data/video1.mp4";
import blogs from "./Data/blog.json";
import BlogCard from "./Components/BlogCard";
import Explore from "./Explore-small";

// Importing the logo images
import apple from "./assets/logos/aapl.jpeg";
import amazon from "./assets/logos/amzn.jpeg";
import microsoft from "./assets/logos/msft.jpeg";
import meta from "./assets/logos/meta.jpeg";
import google from "./assets/logos/googl.jpeg";
import jpm from "./assets/logos/jpm.jpeg";
import mu from "./assets/logos/mu.jpeg";
import nvda from "./assets/logos/nvda.jpeg";
import visa from "./assets/logos/v.jpeg";
import mastercard from "./assets/logos/ma.jpeg";

const App = () => {
  const [currentView, setCurrentView] = React.useState("home");
  const [selectedBlog, setSelectedBlog] = React.useState(null);

  const logos = [
    { src: apple, alt: "Apple" },
    { src: amazon, alt: "Amazon" },
    { src: microsoft, alt: "Microsoft" },
    { src: meta, alt: "Meta" },
    { src: google, alt: "Google" },
    { src: jpm, alt: "JPMorgan Chase" },
    { src: mu, alt: "Micron Technology" },
    { src: nvda, alt: "NVIDIA" },
    { src: visa, alt: "Visa" },
    { src: mastercard, alt: "Mastercard" },
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['technology', 'innovation', 'community', 'entrepreneurship'];
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    let timer;
    const currentWord = words[loopNum % words.length];

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum => loopNum + 1);
    } else {
      timer = setTimeout(() => {
        setText(prev => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentWord.slice(0, prev.length + 1);
          }
        });
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
    setCurrentView("explore");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedBlog(null);
  };

  if (currentView === "explore") {
    return <Explore initialBlog={selectedBlog} onBackToHome={handleBackToHome} />;
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <video autoPlay loop muted style={{ width: '100%', height: 'auto', objectFit: 'cover' }}>
            <source src={Video} type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
            <Typography
              level="h1"
              style={{
                color: "#fff",
                fontSize: "4rem",
              }}
            >
              Engagement through
            </Typography>
            <Typography
              level="h1"
              style={{ color: "#ff006e", fontSize: "4rem" }}
            >
              <span
                style={{
                  backgroundColor: "#FFECD1",
                  color: "black",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  paddingBottom: "8px",
                }}
              >
                {text}
              </span>
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "80px",
            zIndex: 2,
          }}
        >
          <InfoCard
            header="40+ Active Members"
            description="Innovative participants contributing to Trinity and the Hartford Community"
          />
          <InfoCard
            header="100+ Projects"
            description="Innovative participants contributing to Trinity and the Hartford Community"
          />
          <InfoCard
            header="20+ Events"
            description="Innovative participants contributing to Trinity and the Hartford Community"
          />
        </div>

        {/* Blog Cards Section */}
        <div style={{ paddingTop: "80px", zIndex: 2 , paddingLeft: "45px"}}>
          <Typography level="h2" style={{ textAlign: "center", color: "#001524", marginBottom: "40px" }}>
            Latest Blog Posts
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0 50px" }}>
            {blogs.map(blog => (
              <div key={blog.id} style={{ flex: "1 0 21%", margin: "10px" }}>
                <BlogCard
                  title={blog.title}
                  imageSrc={blog.image_src}
                  onClick={() => handleCardClick(blog)}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", paddingTop: "80px", color: "#001524", zIndex: 2 }}>
          <h1>Where Bantams Work</h1>
        </div>
        <Box
          sx={{
            display: 'flex',
            overflow: 'hidden',
            padding: '20px 0',
            backgroundColor: 'white',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              width: '50px',
              height: '100%',
              top: 0,
              zIndex: 2,
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, white, transparent)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, white, transparent)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'slide 30s linear infinite',
              '&:hover': {
                animationPlayState: 'paused',
              },
              '@keyframes slide': {
                '0%': {
                  transform: 'translateX(0%)',
                },
                '100%': {
                  transform: 'translateX(-50%)',
                },
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box
                key={index}
                sx={{
                  margin: '0 20px',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    borderRadius: '15px',
                    '@media (max-width: 600px)': {
                      width: '60px',
                      height: '60px',
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;