import projectInfo from '../../../data/projectInfo';

const ProjectCard = () => {
    return (
        <section className="project-card">
            <img src="/myschool_mockup.png" />
            <div>
                <h3>MySchool</h3>
                
                <ul>
                {projectInfo[0].tech.map(t => {
                    return (
                    <li className="tech" key={t}>{t}</li>
                    )
                })}
                </ul>

                <p className="description">{projectInfo[0].projectDesc}</p>
                <p>{projectInfo[0].summary}</p>
            </div>
            <style>{`
                h3 {
                    font-size: 3.6rem;
                    color: #00857D;
                    margin-bottom: 16px;
                }

                .project-card {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    font-size: 1.6rem;
                }

                .project-card img {
                    width: 45%;
                }

                .project-card div {
                    width: 40%;
                }

                .project-card ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .tech {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: #0168A6;
                    display: inline;
                }

                .tech:not(:last-child):after {
                    content: " · "
                }

                .description {
                    font-style: italic;
                }
            `}</style>
        </section>
    )
}

export default ProjectCard;