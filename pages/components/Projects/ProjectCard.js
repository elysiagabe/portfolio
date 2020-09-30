import ReactGA from 'react-ga'

const ProjectCard = ({ projId, name, tech, desc, summary, img, links }) => {
    // Used to set order of image for every other project on larger screens
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
                <h3>{name}</h3>
                
                <ul>
                {tech ? tech.map(t => {
                    return (
                    <li className="tech" key={t}>{t}</li>
                    )
                }) : null}
                </ul>

                <p className="description">{desc}</p>

                <div className="summary">
                    <ul>
                        {summary ? summary.map(s => (
                            <li key={s}>{s}</li>
                        )) : null}
                    </ul>
                </div>

                {links ? links.map(link => (
                    <div key={link.url} className="project-link">
                        <img id="arrow" src="/black_arrow.png" />
                        <ReactGA.OutboundLink
                            style={{textDecoration: 'none', color: '#333'}}
                            eventLabel={`Clicked ${link.url}`}
                            to={link.url}
                            target="_blank"
                            trackerNames={['ProjectLinks']}
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

                .summary {
                    margin-bottom: 16px;
                }

                .summary li {
                    list-style-type: disc;
                    margin: 8px 0 8px 20px;
                }

                .project-link {
                    display: flex;
                    align-items: center;
                    margin-top: 12px;
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