import React from 'react';
import PersonCard from './PersonCard';
import Grid from '@mui/joy/Grid';
import boardMembers from '../Data/board.json';

const MembersComponent = () => {
  return (
    <Grid container spacing={2} sx={{ paddingLeft: "80px", paddingTop: "50px" }}>
      {boardMembers.map((member, index) => (
        <Grid item xs={3} key={index}>
          <PersonCard
            name={member.name}
            position={member.position}
            imageSrc={member.imageSrc}
            emailAddress={member.emailAddress}
            linkedinUrl={member.linkedinUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembersComponent;