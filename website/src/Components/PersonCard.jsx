import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";

const PersonCard = (props) => {
  const { imageSrc, name, position, emailAddress, linkedinUrl } = props;

  return (
    <Card sx={{ width: 250 }} color="warning" variant="soft" invertedColors>
      <AspectRatio
        minHeight="200px"
        maxHeight="200px"
        minWidth="200px"
        maxWidth="200px"
      >
        <img src={imageSrc} loading="lazy" alt="" />
      </AspectRatio>
      <div>
        <Typography level="h3" style={{ textAlign: "center" }}>
          {name}
        </Typography>
        <Typography level="body-lg" style={{ textAlign: "center" }}>
          {position}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="soft" size="lg">
          <Button component="a" href={`mailto:${emailAddress}`}>
            Email
          </Button>
          <Button onClick={() => window.open(linkedinUrl, "_blank")}>
            LinkedIn
          </Button>
        </ButtonGroup>
      </div>
    </Card>
  );
};

export default PersonCard;
