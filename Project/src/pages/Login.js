import React, { useState } from "react";
import Layout from "../components/Layout/Layout";

import { Box, Button, Link, TextField, Typography } from "@mui/material";
import loginbackground from "../images/loginbackground.jpg"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Perform authentication logic here (e.g., API calls, etc.)
    // For the sake of this example, let's assume the login is successful if both fields are filled
    
    if (username && password) {
      alert("Login successful!");
      // You can redirect the user to another page after successful login
      // Example: history.push('/dashboard');
    } else {
      alert("Please enter username and password.");
    }
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${loginbackground})` }}>
    <Layout>
      <Box sx={{ my: 5, mx: "auto", width: "300px",mt:20,mb:15}}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" align="center">
            <Link href="#" color="textSecondary" sx={{ mr: 1 }}>
              Forgot Password?
            </Link>
            or
            <Link href="/Signup" color="textSecondary" sx={{ ml: 1 }}>
              Signup
            </Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
    </div>
  );
};

export default Login;
