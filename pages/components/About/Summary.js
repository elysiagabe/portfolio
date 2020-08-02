const Summary = () => {
    return (
        <section className="about-summary">
            <h3>Hey there!</h3>
            <p>
                I'm a full-stack web developer specializing in creating beautiful, user-focused and accessible web apps.<br />
                <br/>
                I have experience building out and deploying production-ready apps using React, JavaScript, HTML, CSS, Node.js and Express and jump at the opportunity to learn new languages, frameworks and skills. I also have a strong foundation in UX/UI design and product management and enjoy learning more in my free time.<br />
                <br/>
                I’m currently enrolled in Lambda School’s Web Development &amp; Software Engineering program, which provides an immersive and hands-on curriculum and prepares students for employment by utilizing agile development methodologies, Git workflows and industry standard platforms.<br />
                <br/>
                Before picking up coding, I earned a degree in Psychology from Lewis &amp; Clark College, honed my coffee-slinging skills at a cafe in Portland, and worked at nonprofits in a variety of roles. With a background in the social impact sector, I’m particularly interested in how technology can be leveraged to build a better world.<br />
                <br/>
                When I’m not on the computer, I love spending time with family and friends, reading, cooking up hearty and delicious vegetarian/vegan meals, taking long nature walks and trips home to Hawaiʻi. 
            </p>
            <p>Want to learn more about my background and prior experience? <a href="#">Download my resume.</a> </p>

            <style jsx>{`
                .about-summary {
                    width: 60%;
                    margin: 0 auto;
                    max-width: 1400px;
                    margin-bottom: 56px;
                }

                .about-summary p {
                    font-size: 1.6rem;
                }

                .about-summary a {
                    font-weight: bold;
                    color: #00857D;
                }
            `}</style>
        </section>
    )
}

export default Summary;