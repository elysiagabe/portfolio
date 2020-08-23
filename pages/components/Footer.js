import ReactGA from 'react-ga'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content-container">

                <div className="contact-info">
                    <p className="name">Elysia Gabe</p>
                    <p className="info">Oakland, CA &nbsp; | &nbsp;  <a href="mailto:elysiagabe@gmail.com">elysiagabe@gmail.com</a></p>
                    <div>
                        <ReactGA.OutboundLink
                            eventLabel="LinkedIn"
                            to="https://www.linkedin.com/in/elysia-gabe/"
                            target="_blank"
                        >
                            <img className="social-icon" src="/linkedin.svg" />
                        </ReactGA.OutboundLink>
                        <ReactGA.OutboundLink
                            eventLabel="GitHub"
                            to="https://github.com/elysiagabe"
                            target="_blank"
                        >
                            <img className="social-icon" src="/github.svg" />
                        </ReactGA.OutboundLink>
                        <ReactGA.OutboundLink
                            eventLabel="Dribbble"
                            to="https://dribbble.com/elysiagabe"
                            target="_blank"
                        >
                            <img className="social-icon" src="/dribbble.svg" />
                        </ReactGA.OutboundLink>
                    </div>
                </div>
            </div>
            <p className="copyright">Designed &amp; Developed by Elysia Gabe</p>

            {/* <img src="footer_wave.png" className="footer-wave" /> */}
            <style jsx>{`
                footer {
                    font-size: 1.2rem;
                    text-align: center;
                    width: 100vw;
                    background-image: url("/footer_wave.png");
                    height: 270px;
                }

                .footer-content-container {
                    display: flex;
                    // justify-content: space-between;
                    align-items: center;
                    padding: 80px 64px 20px;
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .contact-info a {
                    text-decoration: none;
                    color: #333;
                }

                .contact-info a:hover {
                    color: #00857D;
                    text-decoration: underline;
                }

                .name {
                    font-size: 2rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    color: #00857D;
                    margin: 0;
                    margin-bottom: 4px;
                    margin-top: 8px;ß
                }

                .info {
                    font-size: 1.4rem;
                    margin: 0;
                    margin-bottom: 8px;
                }

                .social-icon {
                    width: 30px;
                    margin-right: 8px;
                    transition: .2s;
                }

                .social-icon:hover {
                    filter: brightness(75%);
                }

                .copyright {
                    position: relative;
                    bottom: -10px;
                    text-align: center;
                    display: block;
                    width: 100%;
                }
            `}</style>
        </footer>
    )
}

export default Footer;