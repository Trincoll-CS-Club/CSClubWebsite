import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

const InfoCard = ({ header, description }) => {
  return (
    <div>
      <Card
        sx={{
          width: 350,
          height: 300,
          border: "5px solid #ff006e",
          borderRadius: 10,
          padding: 2,
          transition: "transform 0.3s, background-color 0.3s, color 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#ff006e",
            color: "white",
          },
        }}
      >
        <Typography
          level="title-lg"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            transition: "color 0.1s",
            paddingTop: "20px",
            paddingBottom: "20px"
          }}
        >
          {header}
        </Typography>
        <Typography
          level="body"
          style={{
            textAlign: "center",
            fontSize: "1.5em",
            transition: "color 0.1s",
          }}
        >
          {description}
        </Typography>
      </Card>
    </div>
  );
};

export default InfoCard;