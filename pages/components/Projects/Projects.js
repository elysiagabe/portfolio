import projectInfo from '../../data/projectInfo'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section className="project-container" id="projects">
            <h2>Recent Work</h2>
            <ProjectCard />
            <style jsx>{`
                .project-container {
                    margin-top: 200px;
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