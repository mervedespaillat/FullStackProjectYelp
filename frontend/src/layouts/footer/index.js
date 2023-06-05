import React from "react";
import "./FooterStyle.css";

const Footer = () => {
    
  const year = new Date().getFullYear();

  return (
    <footer className="footer-box">
      <div className="footer-container">
        <ul className="footer-column">
          <h2 className="footer-title">About</h2>
          <li>
            <a href="https://github.com/mervedespaillat">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/merve-do%C4%9Fan-espaillat-872298161/">
              LinkedIn
            </a>
          </li>
        </ul>

        <ul className="footer-column">
          <h2 className="footer-title">Contact</h2>
          <li>1mervedogan@gmail.com</li>
        </ul>
      </div>
      <p className="copyright">{`Copyright © ${year} Melt and related marks are registered trademarks of Melt.`}</p>
    </footer>
  );
};

export default Footer;
