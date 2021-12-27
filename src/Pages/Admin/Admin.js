import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';
import { Grid, Paper } from '@mui/material';
import './Admin.css';
const Admin = () => {

    const { register, handleSubmit, reset } = useForm();
    const [admins, setAdmins] = useState([]);


    const onSubmit = data => {
        fetch('http://localhost:5000/admins', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added Successfully');
                    reset()
                }
            });

    };
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(res => res.json())
            .then(data => setAdmins(data));

    }, []);
    return (

        <Box>
            <Navigation />
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <Typography style={{ fontSize:"30px", fontWeight:"bold", borderBottom:"2px solid black",marginBottom:20 }} variant="text">
                        Admin Panel

                    </Typography>
                    <Box className="admins">
                        {
                            admins.map(admin => <Box>

                                <Paper style={{ width: "300px", height: "250px" }}>
                                    <img style={{ width: '150px', height: '150px' }} src={admin.img} alt="" />
                                    <br />
                                    <Typography variant="text">
                                        {admin.name}
                                    </Typography>
                                    <br />
                                    <Typography variant="text">
                                        Email: {admin.email}
                                    </Typography>
                                </Paper>


                            </Box>)
                        }
                    </Box>

                </Grid>
                <Grid item xs={5}>
                    <Box style={{ backgroundColor: "gray", height: '100vh' }}>

                        <Typography variant="h4">
                            Make Admin

                        </Typography>
                        <form className="form-details" onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ width: 300, borderBottom: '1px solid red' }} placeholder="Enter Admin Name" type="text" {...register("name", { required: true, maxLength: 20 })} />
                            <input style={{ width: 300, borderBottom: '1px solid red' }} placeholder="Enter Admin Email" type="email" {...register("email", { required: true })} />
                            <input style={{ width: 300, borderBottom: '1px solid red', }} placeholder="img url" {...register("img")} />
                            {/* <input style={{ width: 300, borderBottom: '1px solid red', }} type="number" placeholder="Enter Admin Id" {...register("img")} /> */}
                            <input style={{ backgroundColor: "tomato", width: 304 }} type="submit" />
                        </form>

                    </Box>
                </Grid>

            </Grid>



            <Footer />

        </Box>


    );
};

export default Admin;