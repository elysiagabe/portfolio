import skills from '../../../data/skills'

const Skills = () => {
    return (
        <section className="skills">
            <h3>Skillset</h3>
            <p>(And if it's not listed here, I'm a fast learner! 😉)</p>

            <div className="skills-container">
                {skills.map(skill => {
                    return (
                        <div key={skill.id} className="skill-column">
                            <h4>{skill.category}</h4>
                            <div className="underline"></div>
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
                    font-size: 2.4rem;
                }

                .skills p {
                    margin: 0;
                    font-size: 1.4rem;
                    text-align: center;
                }

                .skills-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    // border: 1px solid red;
                }

                .skill-column {
                    font-size: 1.4rem;
                    width: 18%;
                    // border: 1px solid lavender;
                    padding: 28px;
                }

                .skill-column h4 {
                    text-transform: uppercase;
                    font-weight: normal;
                    margin-bottom: 16px;
                    font-size: 1.6rem;
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
            `}</style>
        </section>
    )
}

export default Skills;