import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { LogIn } from './LogIn';
import Navbar from './Navbar';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass);

    e.preventDefault();
    console.log(name, email, pass);
    const userData = {
      name,
      email,
      pass,
    };
    localStorage.setItem('register-info', JSON.stringify(userData));
    // setIsLoggedin(true);
    setName('');
    setEmail('');
    setPass('');
    navigate('/')
  }

  return (
    <>
      <Navbar />
      <div className='auth-form-container App'>
        <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
          <label for='name'>Full Name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} type='name' id="name" name="name" />
          <label for='email'>Email</label>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' id="email" name="email" />
          <label for='password'>Password</label>
          <input required value={pass} onChange={(e) => setPass(e.target.value)} type='password' id="password" name="password" />
          <button className='btn-log' type='submit'>Sign Up</button>
        </form>
        <a href='/'>
          <button className='link-btn' >Already have an account? Log In here.</button>

        </a>
      </div>
      <Footer />

    </>

  )
}

