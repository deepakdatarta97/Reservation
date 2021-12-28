import React, { useState } from "react";

function SignupForm() {
  const [errors, setErrors]=useState("")

    const [user, setUser]= useState({
         name:"", email:"", password:"", cpassword:""
    })
    let name,value;

  

  const handleInputs=(e)=>{
      
      name=e.target.name;
      value=e.target.value
      setUser({...user,[name]:value})
}



const validateInfo=(user)=>{
var errors = {};
  if (!user.name.trim()) {
    errors.name = "Username required";
  }
  else if (!/^[A-Za-z]+/.test(user.name.trim())) {
    errors.name = 'Enter a valid name';
  }

  if (!user.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email address is invalid";
  }
  if (!user.password) {
    errors.password = "Password is required";
  } else if (user.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!user.cpassword) {
    errors.cpassword = "Password is required";
  } else if (user.cpassword !== user.password) {
    errors.cpassword = "Passwords do not match";
  }
  return errors;
}

const handleSubmit=()=>{
    if(validateInfo===true){
        return errors
    }
    else{
        return (console.log("hi"))
    }
}

  return (
    <div className="register">
    <h1>Please Register</h1>
    <div className="car">
      <div>
        <label>UserName :</label>
        <input
          type="text"
          name="name"
          autoFocus={true}
          placeholder="Your Name"
          required
          value={user.name}
          onChange={handleInputs}
          
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email :</label>
        <input
          type="Email"
          name="email"
          placeholder="Email Address"
          required
          value={user.email}
          onChange={handleInputs}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password :</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={handleInputs}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password :</label>
        <input
          type="password"
          name="cpassword"
          value={user.cpassword}
          placeholder="Confirm Your Password"
          required
          onChange={handleInputs}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <p>
        Already Have an Account?
        <span>
          Login  <button>Login</button>
        </span>
      </p>
      <div className="sub">

      <button onSubmit={handleSubmit}>Submit</button>
      </div>
    </div>
    </div>
  );
}

export default SignupForm;
