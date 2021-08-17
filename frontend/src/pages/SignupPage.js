import React from 'react';
import { Button } from 'reactstrap';
import { signupUser } from '../api/UserAPI';
import Navbar from '../components/Navbar';
import '../App.css';

const SignupPage = (props) => {
  const { history } = props;
  const handleSignup = async (evt) => {
    evt.preventDefault();
    let userObject = {
      'username': evt.target.username.value,
      'password': evt.target.password.value,
    }
    let response = await signupUser(userObject);
    let data = await response.json();
    if (data.error) {
      console.log('there was an error signing up');
    } else {
      history.push('/login');
    }
  }

  return (
    <div>
      <Navbar />
        <div className='signup'>
        <h1>Sign-up to play!</h1>
        <div className='signup-content'>
        <br/>
          <form onSubmit={handleSignup}>
            <label>UserName:</label>
            <input type='text' placeholder='Username' name='username' />
            <br/>
            <br/>
            <label>Password:</label>
            <input placeholder='Password' type='password' name='password' />
            <br/>
            <br/>
            <Button color="success" type='submit' >Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;