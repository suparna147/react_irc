import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import aboutus from'../images/aboutus.jpg';
const About = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${aboutus})` }}>
    <Layout>
    
      
      
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
         
          mb:5,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 20,
            
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        
        <Typography variant="h4">WELCOME TO SPORTEX</Typography>
        <br></br>
        <br></br>
        <br></br>
       
        <p><h3>
        Welcome to our Sports Emporium – your ultimate destination for all things athletic and exhilarating! Immerse yourself in a world where passion meets performance, and victory becomes a lifestyle. Our Sports Emporium is more than just a page; it's a curated collection of the finest gear, latest trends, and exclusive insights to fuel your love for the game.

Discover a vast array of premium sports equipment, apparel, and accessories designed to elevate your performance. Whether you're a seasoned athlete or a weekend warrior, our Sports Emporium caters to every level of expertise, offering a meticulously curated selection to help you excel in your chosen field.


        </h3></p>
        <br />
        <p><h3>
        Step into a realm where sports meet lifestyle, where the thrill of competition converges with cutting-edge style. From the latest innovations in sporting technology to timeless classics, our Sports Emporium is your gateway to a world of limitless possibilities.
        </h3></p>
        <br></br>
        <br></br>
        <br></br>
      </Box>
    </Layout>
    </div>
  );
};

export default About;
