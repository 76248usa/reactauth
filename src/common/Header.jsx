import React, { Component } from 'react';
import Nav from './Nav';
import Home from '../component/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Forget from '../component/Forget';
import Profile from '../component/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

 


class Header extends Component {
  render() {
    return (
    <Router>
      <div>
      <Nav/>
       <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />} />
        <Route exact path="/forget" element={ <Forget />} />
        <Route exact path="/profile" element={ <Profile />} />
        </Routes>

      </div>
    </Router>

    )
  }
}

export default Header
