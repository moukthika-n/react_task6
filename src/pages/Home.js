import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, My Name is XYZ</h2>
        <div className="prompt">
          <p>A passionate Programmer.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programming Languages</h2>
            <span>
            ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis
            </span>
          </li>
          <li className="item">
            <h2> Problem Solving</h2>
            <span>
            ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis
            </span>
          </li>
          <li className="item">
            <h2>Communication</h2>
            <span>ipsum dolor sit amet consectetur, adipisicing elit. Dolore, labore. A quidem deserunt dolorem
                                    aliquid ad maiores asperiores hic ipsum, molestiae aperiam provident officiis</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;