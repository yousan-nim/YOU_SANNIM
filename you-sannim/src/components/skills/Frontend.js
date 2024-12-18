import React from "react";


const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend </h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">HTML</h3>
                            <div className="skills__level">Advance</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">CSS</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">JavaScript</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div>

                    {/* <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">Git</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div> */}

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">React</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skill__name">Django</h3>
                            <div className="skills__level">Intermediate</div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skill__name"></h3>
                            <div className="skills__level"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Frontend

