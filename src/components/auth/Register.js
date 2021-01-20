import React from 'react';
import blueDiary from "../../images/blue-diary.jpg";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='appLogin'>
      <img src={blueDiary} height={120} width={90} alt=''/>
      <form className='col-md-6'>
        <div className='form-group'>
          <input type='text' name='username' placeholder='Username' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type='email' name='email' placeholder='Email' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type='password' name='password' placeholder='Password' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type='password' name='password2' placeholder='Confirm Password' className='form-control'/>
        </div>
        <button className='btn btn-primary btn-block'>Register</button>
      </form>
      <div className='mt-4'>
        <Link className='btn btn-secondary' to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Register;