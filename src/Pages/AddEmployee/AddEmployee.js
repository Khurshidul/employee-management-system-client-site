import React from 'react';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import './AddEmployee.css';
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const AddEmployee = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/add-employee', {
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
    return (

        <Box>
            <Box style={{ backgroundColor: "gray",height:'100vh' }}>
                <Navigation />
                <Typography variant="h4">
                    Add new employer's details

                </Typography>
                <form className="form-details" onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: 500, borderBottom: '1px solid red' }} placeholder="Enter Employee Name" type="text" {...register("name", { required: true, maxLength: 20 })} />
                    <input style={{ width: 500, borderBottom: '1px solid red', }} placeholder="img url" {...register("img")} />
                    <input style={{ width: 500, borderBottom: '1px solid red', }} type="text" placeholder="Enter job Post" {...register("Post")} />
                    <input style={{ width: 500, borderBottom: '1px solid red', }} type="number" placeholder="Enter Salary Scale" {...register("Salary")} />
                    <input style={{ backgroundColor: "tomato", width: 504 }} type="submit" />
                </form>

            </Box>
            <Footer/>
        </Box>


    );
};

export default AddEmployee;