import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { TextField, Button, Container, Typography } from '@mui/material';
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
        <h3>Signup Page</h3>
            <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor=''><strong>Name</strong></label>
                    <input type='text' placeholder='Enter name' name = 'name'
                    onChange={handleInput} className='form-control rounded-5'/>
                    <span>{errors.name && <span className='text-danger'> {errors.name} </span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor=''><strong>Email</strong></label>
                    <input type='email' placeholder='Enter email' name = 'email'
                    onChange={handleInput} className='form-control rounded-5'/>
                    <span>{errors.email && <span className='text-danger'> {errors.email} </span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor=''><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' name = 'password'
                    onChange={handleInput} className='form-control rounded-5'/>
                    <span>{errors.password && <span className='text-danger'> {errors.password} </span>}</span>
                </div>
                <div className='mb-3'>
                    <label htmlFor=''><strong>Confirm Password</strong></label>
                    <input type='password' placeholder='Enter your password again' name = 'password'
                    onChange={handleInput} className='form-control rounded-5'/>
                    <span>{errors.password && <span className='text-danger'> {errors.password} </span>}</span>
                </div>
                <Button type='submit' className='btn btn-default bg-light w-100 rounded-5'><strong>Sign up</strong></Button>
                <p className=' '>Terms and conditions</p>
                <Link to ="/signup" className='btn btn-primary w-100 rounded-5 text-decoraton-none'>Log in</Link> 
            </form>
        </div>
    </div>
  )
}

export default Signup