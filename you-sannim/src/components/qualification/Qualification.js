import React, { useState } from "react";
import "./qualification.css"

const Qulification = () => {

    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index)
    }



    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__button qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"> Education </i>
                    </div>

                    <div className={toggle === 1 ? "qualification__button qualification__active" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"> Experience </i>
                    </div>
                </div>
            
                {/* Education */}
                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Math-Science Hight School</h3>
                                <span className="qualification__subtitle">Pomnakarach Sawattayanon Hight School</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2011 - 2017</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                {/*  */}
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                {/*  */}
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor's of Electronics and Telecommunication Engineering</h3>
                                <span className="qualification__subtitle">King Mongkut’s University of Technology Thonburi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017 - 2021</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master's of Electrical Engineering</h3>
                                <span className="qualification__subtitle">King Mongkut’s University of Technology Thonburi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                {/*  */}
                            </div>
                        </div>


                        
                        <div className="qualification__data">
                            <div>
                                {/*  */}
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>
                                {/* <h3 className="qualification__title">Electronic</h3>
                                <span className="qualification__subtitle">KMUTT</span> */}
                                <div className="qualification__calender">
                                    {/* <i className="uil uil-calendar-alt">2017 - 2021</i> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full-Stack Developer</h3>
                                <span className="qualification__subtitle">Freelancer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">start 2021</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                {/*  */}
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                {/*  */}
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">AI Researcher ( Vission Project )</h3>
                                <span className="qualification__subtitle">King Mongkut’s University of Technology Thonburi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2021 - 2022</i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AI Researcher ( ASR Project )</h3>
                                <span className="qualification__subtitle">King Mongkut’s University of Technology Thonburi</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2023 - Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                {/*  */}
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                {/*  */}
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            {/* <div>
                                <h3 className="qualification__title">Electronic</h3>
                                <span className="qualification__subtitle">KMUTT</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017 - 2021</i>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            {/* container */}
            </div>

        </section>
    )
}

export default Qulification