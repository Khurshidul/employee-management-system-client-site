import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
const styles = {
    hover1: {
        "&:hover": {
            backgroundColor: 'white'
        }
    }
}
const Navigation = () => {
    const { user, logout } = useAuth();
    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/admins';
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmins(data));

    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar data-aos="fade-up" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Employee Management
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
                        <Button sx={styles.hover1} color="inherit">Dashboard</Button>
                    </Link>

                    <Box>
                        {admins.map(admin => admin.email === user.email &&
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/admin">
                                <Button sx={styles.hover1} color="inherit">Admin</Button>
                            </Link>
                        )}
                    </Box>
                    <Box>
                        {admins.map(admin => admin.email === user.email &&
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/addEmployee">
                                <Button sx={styles.hover1} color="inherit">Add Employee</Button>
                            </Link>
                        )}
                    </Box>

                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/employers">
                        <Button sx={styles.hover1} color="inherit">Employers</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/employers">
                        <Button sx={styles.hover1} color="inherit">About</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">
                        <Button sx={styles.hover1} color="inherit">Contact</Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'none', color: 'white', backgroundColor: 'black' }} onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;