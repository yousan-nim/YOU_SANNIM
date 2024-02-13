import React, { useState } from 'react'

import "./header.css"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        if (this.scrollY >=560) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const [Toggle, setToggle] = useState(false)
    const [activavNav, setActivavNav] = useState("#home")

    return (
        <div className="header" >
            <nav className="nav container">
                <a href='index.html' className='nav__logo'>Youu</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ui className="nav__list grid">
                        <li className='nav__item'>
                            <a href='#home' onClick={() => setActivavNav("#home")} className={activavNav === "#home" ? "nav__link active_link" : "nav__link"}>
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about' onClick={() => setActivavNav("#about")} className={activavNav === "#about" ? "nav__link active_link" : "nav__link"}>
                                <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skills' onClick={() => setActivavNav("#skills")} className={activavNav === "#skills" ? "nav__link active_link" : "nav__link"}>
                                <i className='uil uil-file-alt nav__icon'></i> Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#portfolio' onClick={() => setActivavNav("#portfolio")} className={activavNav === "#portfolio" ? "nav__link active_link" : "nav__link"} >
                                <i className='uil uil-scenery nav__icon'></i> Portfolio
                            </a>
                        </li>

                        {/* <li className='nav__item'>
                            <a href='#contact' onClick={() => setActivavNav("#contact")} className={activavNav === "#contact" ? "nav__link active_link" : "nav__link"} >
                                <i className='uil uil-message nav__icon'></i> Contact
                            </a>
                        </li> */}
                    </ui>

                    <i class="uil uil-times nav__close" onClick={() => {
                            setToggle(!Toggle)}}>
                    </i>
                </div>
                    
                <div className='nav__toggle' onClick={() => setToggle(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
 
            </nav>
        </div>
    )
}

export default Header