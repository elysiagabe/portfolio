import skills from '../../../data/skills'

const Skills = () => {
    return (
        <section className="skills">
            <h3>Skillset</h3>
            <p>( And if it's not listed here, I'm a fast learner! 😉&nbsp;&nbsp;)</p>

            <div className="skills-container">
                {skills.map(skill => {
                    return (
                        <div key={skill.id} className="skill-column">
                            <div className="skill-column-header">
                                <h4>{skill.category}</h4>
                                <div className="underline"></div>
                            </div>
                            <ul>
                                {skill.skills.map(s => {
                                    return (
                                        <li key={s}>{s}</li>
                                    )
                                })}
                            </ul>
                        </div>

                    )
                })}
            </div>

            <style jsx>{`
                .skills h3 {
                    text-align: center;
                    margin: 0;
                    font-size: 2.2rem;
                    letter-spacing: 1px;
                    color: #00857D;
                    text-transform: uppercase;
                }

                .skills p {
                    margin: 0;
                    font-size: 1.4rem;
                    text-align: center;
                }

                .skills-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    // border: 1px solid red;
                    margin: 0 auto;
                    // width: 70%;
                    width: 90%;
                }

                .skill-column {
                    font-size: 1.4rem;
                    width: 48%;
                    // width: 25%;
                    // border: 1px solid lavender;
                    // padding: 0 28px 28px;
                    // padding: 0 28px;
                }

                .skill-column-header {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    height: 100px;
                    // border: 1px solid magenta;
                }

                .skill-column-header h4 {
                    text-transform: uppercase;
                    font-weight: normal;
                    margin-bottom: 12px;
                    font-size: 1.6rem;
                    // border: 1px solid orange;
                }

                .skill-column ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    line-height: 1.7;
                }

                .underline {
                    height: 1px;
                    width: 20px;
                    margin-bottom: 20px;
                    background: #333;
                }



                @media(min-width: 645px) {
                    .skill-column {
                        width: 24%;
                    }
                }

                @media(min-width: 768px) {
                    .skills-container {
                        width: 70%;
                    }
                }
            `}</style>
        </section>
    )
}

export default Skills;