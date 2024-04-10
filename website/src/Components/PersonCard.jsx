import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { useInView } from 'react-intersection-observer';
import './PersonCard.css';

const PersonCard = ({ imageSrc, name, position, emailAddress, linkedinUrl }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust as needed
  });

  return (
    <Card
      ref={ref}
      sx={{ width: 250, bgcolor: '#e2d0fb' }}
      variant="soft"
      className={`fade-in-section ${inView ? 'is-inView' : ''}`}
    >
      <AspectRatio minHeight="200px" maxHeight="200px" minWidth="200px" maxWidth="200px">
        <img src={imageSrc} loading="lazy" alt="" />
      </AspectRatio>
      <div>
        <Typography level="h3" style={{ textAlign: "center", color: 'black' }}>{name}</Typography>
        <Typography level="body-lg" style={{ textAlign: "center", color: 'black' }}>{position}</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="soft" size="lg">
          <Button component="a" href={`mailto:${emailAddress}`} sx={{ bgcolor: '#c5a1f7', '&:hover': { bgcolor: '#b58ef5' } }}>Email</Button>
          <Button onClick={() => window.open(linkedinUrl, "_blank")} sx={{ bgcolor: '#c5a1f7', '&:hover': { bgcolor: '#b58ef5' } }}>LinkedIn</Button>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default PersonCard;