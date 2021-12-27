import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllEmployer from '../AllEmployer/AllEmployer';
import './AllEmployers.css';
const AllEmployers = () => {
    const [allEmployers, setAllEmployers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/employers')
            .then(res => res.json())
            .then(data => setAllEmployers(data))

    }, [])
    return (
        <Box>

            <Container>
                <Typography style={{ fontSize: '30px', fontWeight: 'bold' }} variant="text">
                    Employers Gallery
                </Typography>
                <Box className="allEmployers">
                    {
                        allEmployers.map(employer => <AllEmployer
                            key={employer.id}
                            employer={employer}
                        ></AllEmployer>)
                    }
                </Box>

            </Container>

        </Box>
    );
};

export default AllEmployers;