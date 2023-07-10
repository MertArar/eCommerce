import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small>&copy; {copyrightYear} Mert Arar</small>
      <div className="social-links">
        <Link to="https://github.com/MertArar" target="_blank">
          <ImGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mert-arar-6788771bb/"
          target="_blank"
        >
          <SiLinkedin />
        </Link>
        <Link to="https://medium.com/@mertarar.ma" target="_blank">
          <BsMedium />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
