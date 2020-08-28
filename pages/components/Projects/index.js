import projectInfo from '../../../data/projectInfo'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section className="project-container" id="projects">
            <h2>Recent Work</h2>
            {projectInfo.map(p => (
                <ProjectCard 
                    key={p.id}
                    projId={p.id}
                    name={p.projectName}
                    tech={p.tech}
                    desc={p.projectDesc}
                    summary={p.summary}
                    img={p.img}
                    links={p.links}
                />
            ))}
            {/* <ProjectCard /> */}
            <style jsx>{`
                .project-container {
                    max-width: 1400px;
                    margin: 200px auto 0;
                    // border: 1px solid pink;
                }

                .project-container h2 {
                    font-size: 2.8rem;
                    text-align: center;
                    font-weight: 400;
                }

            `}</style>
        </section>
    )
}

export default Projects;