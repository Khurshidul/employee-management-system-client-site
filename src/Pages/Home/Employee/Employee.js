import { Paper, Typography } from '@mui/material';
import React from 'react';

const Employee = ({employee}) => {
    const {name, img, Post} = employee;
    return (
        <Paper data-aos="fade-down" style={{ width: "300px", height: "250px" }}>
        <img style={{ width: '150px', height: '150px' }} src={img} alt="" />
        <br />
        <Typography variant="h6">
            {name}
        </Typography>
        <br />
        <Typography variant="text">
            <span style={{fontWeight: 'bold'}}>Job Post:</span> {Post}
        </Typography>
      
    </Paper>
    );
};

export default Employee;