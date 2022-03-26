import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

  state = { 
    email: '',
    password: '',
    message: ''
  }

  //Login Form Submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password 
    }
  
    axios.post('/login', data)
       .then((response) => {
      localStorage.setItem('token', response.data.token); 
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);    
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    //After login redirect to profile
    if(this.state.loggedIn){
      return <Navigate to={'/profile'} />
    }
    return (
<div><br></br><br></br>
    <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Login Account</h3>

            <form onSubmit={this.formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" required onChange={(e)=>{this.setState({email:e.target.value})}} class="form-control"   />
                                                
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary btn-block">Login</button>
  <br></br>
  Forget password <Link to="/forget">Click Here</Link>
</form>

              </div>

          </div>
      </div>
    )
  }
}

export default Login
