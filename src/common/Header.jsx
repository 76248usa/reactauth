import React, { Component } from 'react';
import Nav from './Nav';
import Home from '../component/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Forget from '../component/Forget';
import Profile from '../component/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
 
class Header extends Component {

        state = {user: {}}

        componentDidMount(){
        //Logged in user credentials
        axios.get('/user')
       .then((response) => {
       this.setUser(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
        }

    setUser = (user) => {
        this.setState({user: user })
    }

  render() {
    return (
    <Router>
      <div>
      <Nav user={this.state.user} setUser={this.setUser} />
       <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/register" element={ <Register />} />
        <Route exact path="/forget" element={ <Forget />} />
        <Route exact path="/profile" element={()=> <Profile user={this.state.user}
        setUser={this.setUser} />} />
        </Routes>

      </div>
    </Router>

    )
  }
}

export default Header
