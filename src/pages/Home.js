import React from "react";
import { Fade } from "react-awesome-reveal";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Fade>
        <div className="about">
          <h2>Hi, My Name is Sai Dattu</h2>
          <div className="prompt">
            <p>
              A software developer with a passion for learning and creating.
            </p>
            <a
              href="https://www.linkedin.com/in/k-sai-dattu-75327b178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <LinkedInIcon className="iconsss" />
            </a>
            <EmailIcon className="iconsss" />
            <a href="https://github.com/saidattuk" target="_blank">
              <GitHub className="iconsss" />
            </a>
          </div>
        </div>
      </Fade>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, HTML, CSS, JavaScript, Python, Java</span>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2>Frameworks & Tools</h2>
            <span>React, Angular, Figma</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
