import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useState } from "react";

import Validation from './LoginValidation';
import { TextField, Button, Container, Typography } from '@mui/material';

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
        axios.post('http://accredian-backend-task-production-94a0.up.railway.app/login', values)
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
            <h3>Login Page</h3>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor=''><strong>Email</strong></label>
                    <TextField type='email' placeholder='Enter email' name='email'
                    onChange={handleInput}/>
                    <span>{errors.email && <span className='text-danger'> {errors.email} </span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor=''><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' name='password'
                    onChange={handleInput} className='form-control rounded-5'/>
                    <span>{errors.password && <span className='text-danger'> {errors.password} </span>}</span>
                </div>
                <Button type='submit' className='btn btn-default bg-light w-100 rounded-5 '><strong>Log in</strong></Button>
                <p></p>
                <Link to ="/signup" className='btn btn-primary w-100 rounded-5 text-decoraton-none'>Create Account</Link> 
            </form>
        </div>
    </div>
  )
}

export default Login