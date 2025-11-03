import React from "react";
function Team() {
  return (
    <div className="container mt-5 mb-5">
        <h1 className="text-center mb-5">People</h1>
      <div className="row">
        <div className="col-4">
          <img
            src="media/images/Manohar2.jpg"
            alt="Manohar2"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-center mt-2">Manohar</h1>
          <p className="text-center mt-2">Student of RVCE</p>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <p className="fs-5">
            Hi, I'm <b>Manohar Mohan Rathod</b>, a passionate full-stack
            developer focused on building efficient, secure, and user-friendly
            digital solutions. I combine strong problem-solving skills with
            hands-on experience in modern web technologies and IoT automation
            systems. I enjoy working on real-world projects, optimizing
            performance, and learning cutting-edge tools to deliver impactful
            results.
          </p>
          <ul className="fs-5">
            <li>Developer</li>
            <li>Problem Solver</li>
            <li>Tech Explorer MERN</li>
            <li>Automation </li>
          </ul>
          <p className="fs-5" >
            Connect on
            <a
              className="nav-link"
              href="https://www.instagram.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
