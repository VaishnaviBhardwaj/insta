import React from "react";

const Signup = () => {
  return (
    <div className="card blue-grey auth-card darken-1">
      <div className="card-content white-text input-field">
        <h1>Insta</h1>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Password" />

        <button className="btn #64b5f6 blue lighten-2">SignUp</button>
      </div>
    </div>
  );
};

export default Signup;
