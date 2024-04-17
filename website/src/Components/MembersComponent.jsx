import React, { useState, useEffect } from 'react';
import client from '../sanityClient';  // Adjust the path according to where your Sanity client is configured
import PersonCard from './PersonCard';
import Grid from '@mui/joy/Grid';

const MembersComponent = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Adjust the query as per your schema definitions
    const query = `*[_type == "aboutUs"]{
      name,
      position,
      email,
      linkedin,
      picture {
        asset->{
          _id,
          url
        },
        alt
      }
    }`;

    client.fetch(query)
      .then(data => {
        setMembers(data);
      })
      .catch(error => console.error('Error fetching board members data:', error));
  }, []);

  return (
    <Grid container spacing={2} sx={{ paddingLeft: "140px", paddingTop: "50px" }}>
      {members.map((member, index) => (
        <Grid item xs={3} key={index}>
          <PersonCard
            name={member.name}
            position={member.position}
            imageSrc={member.picture?.asset?.url}
            emailAddress={member.email}
            linkedinUrl={member.linkedin}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembersComponent;
