import React, { useState, useEffect } from 'react';

const MembersComponent = () => {
  const [members, setMembers] = useState([]);

  // Define the API endpoint URLs
  const membersUrl = 'http://localhost:1337/api/members';
  
  // Define your API token here
  const apiToken = 'ee69bd8f3ad4a6ef6510d91cf465a8ec0427e6e72217547df28f152a1cf58def6fc4650cb45cd3a1e3b7d133039fc0166918d9f2ad02b4a72a811f6d985174592125114348d66cc176f9c0fe4cf76af717d99e702539bfc81d3f59e65a0a8e8e8805d278717c5737489dcb7deb625c49a6530302b49f25a079f272cbfd6d8588';

  useEffect(() => {
    fetch(membersUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setMembers(data.data);
    })
    .catch(error => console.error('Error fetching members:', error));
  }, []); // The empty array ensures this effect runs only once after the component mounts

  return (
    <div id="members">
      {members.map((member, index) => (
        <p key={index}>
          Name: {member.attributes.Name}, Position: {member.attributes.Position}
        </p>
      ))}
    </div>
  );
};

export default MembersComponent;
