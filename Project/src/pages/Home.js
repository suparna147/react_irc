import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import sportsbackground from "../images/sportsbackground.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${sportsbackground})` }}>
        <div className="headerContainer">
          <center>
          <h1>SPORTEX</h1>
          <p>Game On,World Off</p>
          <Link to="/login">
            <button>Login</button>
            
          </Link>
          </center>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
