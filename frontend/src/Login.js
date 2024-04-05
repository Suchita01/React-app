import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function Login(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err)

        if(err.email === "" && err.password===""){

            navigate('/newhome',{state:{id:"Suchita"}});
            // axios.post('http://localhost:8081/login', values)
            // .then(res => {
            //     //console.log(res.data[0]['id'])
            //     if(res.data.length > 0) {
            //         if(res.data[0]['name']!=null){
            //             navigate('/home',{state:{id:res.data[0]['name']}});
            //         }else{
            //             alert("No Record found");
            //         }
            //     } else {                        
            //         alert("No Record found");
            //     } 
            // })
            // .catch(err => console.log(err))
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h3 className="heading mb-4 text-center">LOGIN</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email'
                        onChange={handleInput} className='form-control p-1 rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password'
                        onChange={handleInput} className='form-control p-1 rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type ='submit' className='btn btn-success w-100 rounded-0 mb-3 p-1'>Log in</button>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light p-1 rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login