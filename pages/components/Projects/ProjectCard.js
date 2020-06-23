import projectInfo from '../../data/projectInfo';

const ProjectCard = () => {

    console.log({projectInfo})
    return (
        <section>
            <h3>MySchool</h3>
            <ul>
            {projectInfo[0].tech.map(t => {
                return (
                <li className="tech" key={t}>{t}</li>
                )
            })}
            </ul>
            <style>{`
                h3 {
                    font-size: 3.6rem;
                    color: #00857D;
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
            `}</style>
        </section>
    )
}

export default ProjectCard;