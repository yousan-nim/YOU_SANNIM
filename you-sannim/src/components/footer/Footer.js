import React from "react";

import "./footer.css"


const Footer = () => { 
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">PONGCHANOK</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Project
                        </a>
                    </li>

                    <li>
                        <a href="#skils" className="footer__link">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Portfolio
                        </a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="#https://www.instagram.com/_yousan_nim/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="#https://github.com/IZZARA-URA" className="footer__social-link" target="_blank">
                        <i class="bx uil-github-alt"></i>
                    </a>

                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Pongchanok. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer




