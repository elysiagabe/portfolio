import ReactGA from 'react-ga'

const ProjectCard = ({ projId, name, tech, desc, summary, img, links }) => {


    const updateOrder = id => {
        if (id % 2 === 0) {
            return "right-col"
        } 
    }

    return (
        <section className="project-card">
            <img 
                src={img} 
                alt={`Screenshot of ${name} project`}
                id={updateOrder(projId)}
            />
  
            <div className="project-info">
                {/* project info here */}
                <h3>{name}</h3>
                
                <ul>
                {tech ? tech.map(t => {
                    return (
                    <li className="tech" key={t}>{t}</li>
                    )
                }) : null}
                </ul>

                <p className="description">{desc}</p>
                <p>{summary}</p>

                {links ? links.map(link => (
                    <div key={link.url} className="project-link">
                        <img id="arrow" src="/black_arrow.png" />
                        <ReactGA.OutboundLink
                            eventLabel={`Clicked ${link.url}`}
                            to={link.url}
                            target="_blank"
                            trackerNames={['ProjectLinks']}
                            id="link"
                        >
                            {link.preview}
                        </ReactGA.OutboundLink>
                    </div>
                )): null}

            </div>
            <style jsx>{`
                h3 {
                    font-size: 3.6rem;
                    color: #00857D;
                    margin-bottom: 16px;
                }

                .project-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 1.6rem;
                    width: 90%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }

                .project-card img {
                    width: 100%;
                }

                .project-info {
                    width:  100%;
                    padding: 0 32px 0 32px;
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

                .project-link {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                }

                #arrow {
                    width: 28px;
                    margin-right: 16px;
                }

                @media(min-width: 768px) {
                    .project-card {
                        width: 70%;
                    }
                }

                @media(min-width: 1024px) {
                    .project-card {
                        flex-direction: row;
                    }

                    .project-card img, 
                    .project-info {
                        width: 50%;
                    }

                    #right-col {
                        order: 100;
                    }
                }
            `}</style>
        </section>
    )
}

export default ProjectCard;