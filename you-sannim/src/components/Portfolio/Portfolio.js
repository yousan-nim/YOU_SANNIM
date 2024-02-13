import React from 'react'
import "./portfolio.css"

// import IMG1 from "../../assests/portfolio1.png"

// import IMG1 from "../../assets/portfolio1.png"
import IMG1 from "../../assets/default_project.png"
import IMG_AI from "../../assets/default_ai.png"

const data = [
    {
        id:1,
        image: IMG_AI,
        title: 'GAN Model',
        github: 'https://github.com/IZZARA-URA/PYTORCH_LEARN_ARCHITECTURES/tree/main/GenerativeAdversarialNetworks',
        demo: "x",
    },
    {
        id:2,
        image: IMG_AI,
        title: 'Transformer Model',
        github: 'https://github.com/IZZARA-URA/TRANSFORMERS',
        demo: '',
    },
    {
        id:3,
        image: IMG_AI,
        title: 'Seq2Seq Model: Translation',
        github: 'https://github.com/IZZARA-URA/NLP_MACHINE_TRANSLATION',
        demo: '',
    },
    {
        id:4,
        image: IMG1,
        title: 'DJANGO: ECOMMERCE',
        github: 'https://github.com/IZZARA-URA/DJANGO_VEGETMART',
        demo: '',
    },
    {
        id:5,
        image: IMG_AI,
        title: 'PPE DETECTION',
        github: 'https://github.com/IZZARA-URA/PPE_DETECTION',
        demo: '',
    },
    {
        id:6,
        image: IMG_AI,
        title: 'NLP SENTIMENT ANALTSYS',
        github: 'https://github.com/IZZARA-URA/NLP_SENTIMENT_ANALYSIS',
        demo: '',
    },
]


// export default data

const Portfolio = () => {
  return (
    <section className='portfolio section' id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Portfolio</span>
        <div className="portfolio__container container">
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>

                            <h3 className='portfolio__title'>
                                {title}
                            </h3>

                            <div className="portfolio__button">
                                {demo === "" ? (
                                    <div className="portfolio__cta">
                                        <a href={github} className="portfolio__scroll-arrow" target="_blank">
                                            Github
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </div>
                                ) : (
                                    <div className="portfolio__cta">
                                        <a href={github} className="portfolio__scroll-arrow" target="_blank">
                                            Github
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </a>
                                        <a href={demo} className="portfolio__scroll-arrow" target="_blank">
                                            Live Demo
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </div>
                                )}
                            </div>

                                            
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Portfolio

