import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5002/api/signup", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleInputChange} />
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default SignupPage;
