import Skills from './Skills';

const About = () => {
    return (
        <section className="about-container" id="about">
            <h2>About Me</h2>
            <Skills />

            <style jsx>{`
                .about-container {
                    max-width: 1400px;
                    margin: 120px auto 0;
                }

                .about-container h2 {
                    font-size: 2.8rem;
                    text-align: center;
                    font-weight: 400;
                }
            `}</style>
        </section>
    )
}

export default About;