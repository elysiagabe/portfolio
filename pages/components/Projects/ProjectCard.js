// import projectInfo from '../../../data/projectInfo';

const ProjectCard = ({ id, name, tech, desc, summary, img, links}) => {
    console.log(links)
    // console.log("props: ", props)
    // set state isEven? 
    // const order
    const setOrder = (id) => {
        if (id % 2 === 0) {
            return 5
        } else {
            return -5
        }
    }


    return (
        <section className="project-card">
            {/* <img src="/myschool_mockup.png" /> */}
            <img src={img} style={{order: setOrder(id)}} />
            {/* <div>image here</div> */}
            <div className="project-info">
                {/* project info here */}
                <h3>{name}</h3>
                
                <ul>
                {tech.map(t => {
                    return (
                    <li className="tech" key={t}>{t}</li>
                    )
                })}
                </ul>

                <p className="description">{desc}</p>
                <p>{summary}</p>

                {links.map(link => (
                    <div className="project-link">
                        <img src="/black_arrow.png" />
                        <a href={link.url}>{link.preview}</a>
                    </div>
                ))}

            </div>
            <style>{`
                h3 {
                    font-size: 3.6rem;
                    color: #00857D;
                    margin-bottom: 16px;
                }

                .project-card {
                    display: flex;
                    align-items: center;
                    font-size: 1.6rem;
                    width: 70%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                    // border: 1px solid blue;
                }

                .project-card img {
                    width: 50%;
                    // padding: 8px;
                    // border: 1px solid magenta;
                }

                .project-info {
                    width:  50%;
                    padding: 0 32px 0 32px;
                    // border: 1px solid orange;
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
                    margin-bottom: 8px
                    
                }

                .project-link img {
                    width: 28px;
                    margin-right: 16px;
                }

                .project-link a {
                    text-decoration: none;
                }
            `}</style>
        </section>
    )
}

export default ProjectCard;