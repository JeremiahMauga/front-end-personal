import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NewQueryPage from './pages/NewQueryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetGemsPage from './pages/GetGemsPage';
import FreeGamesPage from './pages/FreeGamesPage';
import GamesOnSalePage from './pages/GamesOnSalePage';

import { getLoggedInUser, login } from './api/UserAPI';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user]);

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    }
    let response = await login(userObject);
    let data = await response.json();
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  };

  const renderLoginPage = () => {
    return (
      <div>
      <Navbar 
        // isLoggedIn={isLoggedIn}
        // user={user}
        // handleLogout={handleLogout}
      />
      <LoginPage
        // isLoggedIn={isLoggedIn}
        // handleLogin={handleLogin}
        // handleLogout={handleLogout}
        // user={user}
      />
      <Footer/>
      </div>
    )
  }

  const renderHomePage = () => {
    return (
      <div>
        <Navbar 
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
          />
        <HomePage
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <Footer/>
      </div>
    )
  };

  const renderFreeGamesPage = () => {
    return (
      <div>
        <Navbar 
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <FreeGamesPage
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <Footer/>
      </div>
    )
  };

  const renderGetGemsPage = () => {
    return (
      <div>
        <Navbar 
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
          />
        <GetGemsPage
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <Footer/>
      </div>
    )
  };

  const renderGamesOnSalePage = () => {
    return (
      <div>
        <Navbar 
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
          />
        <GamesOnSalePage
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <Footer/>
      </div>
    )
  };

  const renderNewQueryPage = () => {
    return (
      <div>
        <Navbar 
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
          />
        <NewQueryPage
          // isLoggedIn={isLoggedIn}
          // user={user}
          // handleLogout={handleLogout}
        />
        <Footer/>
      </div>
    )
  };


  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" render={renderHomePage} />
          {/* <Route exact path="/login" render={renderLoginPage} /> */}
          {/* <Route exact path="/signup" component={SignupPage} /> */}
          <Route exact path="/getgems" component={renderGetGemsPage} />
          <Route exact path="/freegames" component={renderFreeGamesPage} />
          <Route exact path="/gamesonsale" component={renderGamesOnSalePage} />
          <Route exact path="/newquery" component={renderNewQueryPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;