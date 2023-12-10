import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { TextField, Button, Container, Typography,Box } from '@mui/material';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

    const [values,setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
const navigate = useNavigate();
const [errors,setErrors] = useState({})

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}))
}

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === '' && errors.email === '' && errors.password === '') {
        axios.post('https://accredian-backend-task-production-94a0.up.railway.app/signup', values)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center  vh-100'>
        <div className='bg-white p-2 rounded w-25' >
        <Typography variant="h5" component="h1" margin={2}>Signup Page</Typography>
            <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                    
                <TextField fullWidth label="Enter name"  placeholder='Enter name' name='name'
                    onChange={handleInput}/>
                    <Typography>{errors.name && <span className='text-danger'> {errors.name} </span>}</Typography>
                </div>
                <div className='mb-3'>
                    
                <TextField fullWidth label="Enter email id"  type='email' placeholder='Enter email' name='email'
                    onChange={handleInput}/>
                <Typography>{errors.email && <span className='text-danger'> {errors.email} </span>}</Typography>
                </div>
                <div className='mb-3'>
                <TextField fullWidth label="Enter password"  type='password' placeholder='Enter password' name='password'
                    onChange={handleInput}/>
                    <Typography>{errors.password && <span className='text-danger'> {errors.password} </span>}</Typography>
                </div>
                <div className='mb-3'>
                <TextField fullWidth label="Confirm password"  type='password' name='confirm password' placeholder='Confirm password'
                    onChange={handleInput}/>
                    <Typography>{errors.password && <span className='text-danger'> {errors.password} </span>}</Typography>
                </div>

                <Box textAlign="center">
                <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
                <p></p>
                <Button variant="outlined" justifyContent="center" href="/signup">Log in</Button> 
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Signup