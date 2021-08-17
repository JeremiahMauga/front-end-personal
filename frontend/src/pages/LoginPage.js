import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../App.css';

const Login = ({isLoggedIn, handleLogout, handleLogin}) => {

  if (isLoggedIn) {
    return <div className='login'>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  }

  return (
    <div className='login-content'>
      <div className='login'>
      <h1>Login or Sign-up to get Started!</h1>
        <div>
          <br/>
          <form onSubmit={handleLogin}>
            <label>UserName:&nbsp;</label>
            <input type='text' placeholder='Enter Name' name='username' />
            <br/>
            <br/>
            <label>Password:&nbsp;</label>
            <input type='password' placeholder='Enter Password' name='password' />
            <br/>
            <br/>
            <Button color="success" type='submit' >Submit</Button>
          </form>
          <div>
            <br/>
            <br/>
            <Link to='/signup'><h1>Signup</h1></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;