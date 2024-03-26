import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const PersonCard = (props) => {
  return (
    <Card sx={{ width: 250 }} color="warning" variant="soft" invertedColors>
      <AspectRatio
        minHeight="200px"
        maxHeight="200px"
        minWidth="200px"
        maxWidth="200px"
      >
        <img
          src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="h3" style={{ textAlign: 'center' }}>Anupam Khargharia</Typography>
        <Typography level="body-lg" style={{ textAlign: 'center' }}>Vice President</Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup variant="soft" size="lg">
          <Button>Email</Button>
          <Button onClick={() => window.location.href = 'https://www.linkedin.com/in/akhargha'}>LinkedIn</Button>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default PersonCard;
