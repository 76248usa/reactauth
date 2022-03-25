import React, { Component } from 'react';
import { Link } from 'react-router-dom'

 class Register extends Component {
  render() {
    return (
      <div>
        <div><br></br><br></br>
    <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Register Account</h3>

            <form>
            <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" />
  </div>
  
  <button type="submit" class="btn btn-primary btn-block">Register</button>
  <br></br>
  Have an Account? <Link to="/login">Login</Link><br></br>
  Forgot my Password <Link to="/forget">Click</Link>
</form>

              </div>

          </div>
      </div>
      </div>
    )
  }
}

export default Register