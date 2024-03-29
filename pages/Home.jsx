import React from "react";
import "./Home.css";
import ScrollingBackground from "../components/ScrollingBackground";


function Home() {
  return (
    <div className="Home">
      <section className="HomePage shaper">
        <img src="HeaderLogo.png" className="Logo" />
        <div className="UnderLogo">
          <img src="/Characters/Songweaver.png" className="Songweaver"></img>
          <div className="FormSection">
            <p className="Instructions">
              {" "}
              Log in or register to pursue thy quest further!{" "}
            </p>
            <div className="Forms">
              <form className="LoginForm">
                <p>Login</p>
                <input placeholder="Email or Username"></input>
                <input placeholder="Password"></input>
                <button ><a href="http://127.0.0.1:5173/CharacterSelection"> Login </a> </button>
              </form>
              <form
                className="RegisterForm"
                action="http://localhost:5433/register"
                method="post"
              >
                <p>Register</p>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Username"></input>
                <input placeholder="Email"></input>
                <input placeholder="Password"></input>
                <button type="submit"> Register </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ScrollingBackground />
    </div>
  );
}

export default Home;
