import React from 'react';
import blueDiary from "../../images/blue-diary.jpg";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className='appLogin'>
      <img src={blueDiary} height={200} width={130} alt=''/>
      <form className='col-md-6'>
        <div className='form-group'>
          <input type='text' name='username' placeholder='Username' className='form-control'/>
        </div>
        <div className='form-group'>
          <input type='password' name='password' placeholder='Password' className='form-control'/>
        </div>
        <button className='btn btn-primary btn-block'>Login</button>
      </form>
      <div className='mt-5'>
        {/*<button className='btn btn-secondary mr-3'>Forgot Password</button>*/}
        <Link className='btn btn-secondary ml-3' to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Login;
