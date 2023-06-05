import React from "react";
import './FooterStyle.css'

const Footer = () => {

    return (
    <footer className="footer-box">
        <div className="footer-container">
            <div className="footer-row">
                <div className="column">
                    <h2>About</h2>
                    <ul>
                        <li> 
                            <a href="https://github.com/mervedespaillat">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/merve-do%C4%9Fan-espaillat-872298161/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                        1mervedogan@gmail.com  
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

        
    )
}

export default Footer