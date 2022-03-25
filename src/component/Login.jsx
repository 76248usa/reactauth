import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
<div><br></br><br></br>
    <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Login Account</h3>

            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
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
