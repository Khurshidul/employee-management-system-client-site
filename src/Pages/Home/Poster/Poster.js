import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import poster from '../../../images/poster.jfif';
import { Typography } from '@mui/material';
const style ={
    marginTop: '20px',
   
}
const Poster = () => {
    return (
        <Box>
            <Paper sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img data-aos="fade-right" style={{width: "55vh", height: "350px"}} src={poster} alt="" />

                    </Grid>
                    <Grid sx={{mt:5}} item xs={12} md={6}>
                        <Typography style={{ fontSize:"30px", fontWeight:"bold" }} variant="text">
                            Our Ambition

                        </Typography>
                        <br />
                        <Typography data-aos="fade-left" variant="text">
                        Employers value employees who come to work on time and take responsibility for their actions and behaviors. In addition, employers know that dependable and responsible employees value their job, job expectations, and their performance level. Desire for Continued Learning.

                        </Typography>


                    </Grid>

                </Grid>
            </Paper>
        </Box>
    );
};

export default Poster;