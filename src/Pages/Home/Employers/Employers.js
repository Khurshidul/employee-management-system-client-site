import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Employee from '../Employee/Employee';
import './Employers.css';
const Employers = () => {
    const [employers, setEmployers] = useState([])
    fetch('http://localhost:5000/add-employee')
        .then(res => res.json())
        .then(data => setEmployers(data));
    return (
        <Box>
            <Navigation />
            <Typography variant="h2">
                Our Employers

            </Typography>
            <Box className="ourEmployers">
                {
                    employers.map(employee => <Employee
                        key={employee.id}
                        employee={employee}
                    ></Employee>)
                }
            </Box>
            <Footer />
        </Box>
    );
};

export default Employers;