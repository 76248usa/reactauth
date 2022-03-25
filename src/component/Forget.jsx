import React, { Component } from 'react';
import { Link } from 'react-router-dom'

 class Forget extends Component {
  render() {
    return (
      
        <div><br></br><br></br>
    <div class="row">
        <div class="jumbotron col-lg-4 offset-lg-4">
            <h3 class="text-center">Forgot Password</h3>

            <form>
           
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" />
    
  </div>

  <button type="submit" class="btn btn-primary btn-block">Forgot Password</button>
  <br></br>
  Have an Account? <Link to="/login">Login</Link><br></br>
  Don't have an Account <Link to="/register">Register</Link>
</form>

              </div>

          </div>
      </div>
     
    )
  }
}

export default Forget