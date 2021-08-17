import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './LoginButton.css';
import { getInventoryByID } from '../api/UserAPI';

const LoginButton = ({isLoggedIn, handleLogout, handleLogin, user}) => {
  return (
    <div>
      {
        !isLoggedIn
        ?
        <Link to='/login'>
        <Button outline color="success" onClick={handleLogin}>Log in</Button>
        </Link>
        :
        user &&
        <div>
          <Link to='/login'>
          <Button outline color="success" onClick={handleLogout}>Log out</Button>
          </Link>
          <div class='div1'>
            <p>Hello {user.username}</p>
          </div>
        </div>
      } 
    </div>
  );
};

export default LoginButton;