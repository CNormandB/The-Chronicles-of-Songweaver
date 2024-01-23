import React from 'react';
import { Link } from 'react-router-dom'
import ScrollingBackground from "../components/ScrollingBackground";

function Home() {
  return (
    <div className="Home">
      <ScrollingBackground>
        <section className="HomePage shaper">
          <p> Log in or register to pursue thy quest further </p>
          <div className="LoginForm">
            <p>Login</p>
            <form>
              <input placeholder="Email or Username"></input>
              <input placeholder="Password"></input>
              <button> Login </button>
            </form>
          </div>
          <div className="RegisterForm">
            <p>Register</p>
            <form>
              <input placeholder="First Name"></input>
              <input placeholder="Last Name"></input>
              <input placeholder="Username"></input>
              <input placeholder="Email"></input>
              <input placeholder="Password"></input>
            </form>
            <button> Register </button>
          </div>
        </section>
      </ScrollingBackground>
    </div>
  );
}

export default Home;