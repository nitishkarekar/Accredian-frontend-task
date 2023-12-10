import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState } from "react";
import '@fontsource/roboto/400.css';

import Validation from './LoginValidation';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Roboto&family=Roboto+Mono:wght@300;400&family=Ubuntu:ital@1&display=swap');
</style>


const Login = () => {
    const [values,setValues] = useState({
        email: '',
        password: ''
    })

const navigate = useNavigate();
const [errors,setErrors] = useState({})

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === '' && errors.password === '') {
        axios.post('https://accredian-backend-task-production-94a0.up.railway.app/login', values)
        .then(res => {
            
            if(res.data === 'Success') {
                navigate('/home')
            }
            else{
                alert("no record found")
            }
        })
        .catch(err => console.log(err));
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-2 rounded w-25'>
            <Typography variant="h5" component="h1" margin={2}>Login Page</Typography>
            
                <div className='mb-3'>
                    <TextField fullWidth label="Enter email id"  type='email' placeholder='Enter email' name='email'
                    onChange={handleInput}/>
                    <Typography>{errors.email && <span> {errors.email} </span>}</Typography>
                    
                </div>
                <div className='mb-3' >
                    <TextField fullWidth label="Enter password" id="fullWidth" type='password' placeholder='Enter password' name='password'
                    onChange={handleInput} />
                    <Typography>{errors.password && <span className='text-danger'> {errors.password} </span>}</Typography>
                </div>
                
                <Box textAlign="center">
                <Button variant="contained" onClick={handleSubmit}>Log in</Button>
                <p></p>
                <Button variant="outlined" justifyContent="center" href="/signup">Create Account</Button> 
                </Box>
        </div>
    </div>
  )
}

export default Login