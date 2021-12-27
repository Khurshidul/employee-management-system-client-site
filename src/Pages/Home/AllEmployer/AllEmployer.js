import { Paper, Typography } from '@mui/material';
import React from 'react';

const AllEmployer = ({ employer }) => {
  const { firstName, lastName, gender, email, phone, image } = employer;
  return (

    <Paper>
      <img style={{ width: '200px', height: '200px' }} src={image} alt="" />
      <br />

      <Typography variant="text">
        {firstName} {lastName}

      </Typography>
      <br />
      <Typography variant="text">
        Gender: {gender}

      </Typography>
      <br />

      <Typography variant="text">
        Email: {email}

      </Typography>
      <br />

      <Typography variant="text">
        Phone: {phone}

      </Typography>
      <br />

     
    </Paper>


  );
};

export default AllEmployer;