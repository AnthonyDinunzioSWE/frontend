import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5002/api/login", formData);
      setToken(response.data.access_token);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      {token && <p>Your JWT: {token}</p>}
    </div>
  );
};

export default LoginPage;
