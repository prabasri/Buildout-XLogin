import React, { useState } from "react";

function LoginPage() {

  const [user, setUser] = useState({username: "", password: ""});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e, inputField) => { // inputField is used to denote whether username or password is changing
    setUser((prevUser) => ({
      ...prevUser,
      [inputField]: e.target.value
    }));
    setIsSubmitted(false);
  }
  // console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  const isValidUser = () => {
    if(user.username === "user" && user.password === "password") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      {(isSubmitted && !isValidUser()) && <p>Invalid username or password</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" onChange={(e) => handleChange(e, e.target.id)} value={user.username} required/>
        <br/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" onChange={(e) => handleChange(e, e.target.id)} value={user.password} required/>
        <br/>
        <button type="submit">Submit</button>
      </form>
      {(isSubmitted && isValidUser()) && <p>Welcome, user </p>}
    </div>
  )
}

export default LoginPage;