import React, {useState} from 'react';
import blueDiary from "../../images/blue-diary.jpg";
import {Link} from "react-router-dom";
import {Alert} from "react-bootstrap";
const {ipcRenderer} = window.require('electron')

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: ''
  });

  const {username, email, password, password2} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();
    ipcRenderer.send('user:register', formData)
    ipcRenderer.on('user:registerSuccess', () => {
      setAlert({
        show: true,
        message: 'User registered successfully',
        variant: 'success'
      })
    })
    ipcRenderer.on('user:registerFailed', () => {
      setAlert({
        show: true,
        message: 'User registration failed',
        variant: 'danger'
      })
    })
  }

  return (
    <div className='appLogin'>
      <img src={blueDiary} height={120} width={90} alt=''/>
      <form className='col-md-6' onSubmit={onSubmit}>
        {alert.show && (<Alert variant={alert.variant}>
          {alert.message}
        </Alert>)}

        <div className='form-group'>
          <input type='text' name='username' placeholder='Username' className='form-control'
            value={username} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <input type='email' name='email' placeholder='Email' className='form-control'
                 value={email} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <input type='password' name='password' placeholder='Password' className='form-control'
                 value={password} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <input type='password' name='password2' placeholder='Confirm Password' className='form-control'
                 value={password2} onChange={onChange}/>
        </div>
        <button type='submit' className='btn btn-primary btn-block'>Register</button>
      </form>
      <div className='mt-4'>
        <Link className='btn btn-secondary' to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Register;