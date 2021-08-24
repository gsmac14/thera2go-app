import React, { useState } from 'react';
import "./style.css";
import API from "../../utils/API";
import NavBar from '../NavBar';
// import NavBar from '../NavBar';

export default function Login(props) {

    const [formObject, setFormObject] = useState({})

     //Handles input made by user
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  function handleSubmit(event){
  
    event.preventDefault();
   
  logInUser(formObject.email, formObject.password)
  function logInUser(email, password){
  
    if (formObject.email && formObject.password) {
      API.getUser({
        email: formObject.email,
        password: formObject.password
     
      })
        .then(function(res){
          let uSer = JSON.stringify(res.data.auth);
          console.log(JSON.stringify(res))
          if (uSer === 'true'){
            props.authenticate();
            props.history.push("/eventList")
          }
          
  
        })
        .catch(err => console.log(err));
    }
  }
  
  }

  return (
      <div className="container">
        <NavBar />
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted"> Enter login and password</p>
              <input 
              type="text" 
              name="email" 
              onChange={handleInputChange}
               placeholder="Email"
              style={{color: "white"}} />

              <input 
                type="password" 
                name="password" 
                onChange={handleInputChange}
                style={{color: "white"}}  placeholder="Password"
                />
              <div className="row2">
                <a className="forgot text-muted">
                  Create Account
                </a>
                <input type="submit" name="" value="Login" onClick={handleSubmit} href="/event"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
