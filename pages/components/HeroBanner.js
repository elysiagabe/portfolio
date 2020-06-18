const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <section className="hero-content">
                <div className="hero-image">Placeholder</div>
                <div className="hero-blurb">
                    <h1>Aloha, I'm Elysia</h1>
                    <p>A full-stack web developer based in Oakland with roots in Hawaiʻi. I’m passionate about building impactful, scalable and accessible tech solutions for social good. </p>
                    <div className="hero-button">
                        <img src="/green_arrow.png" id="icon" />
                        <a href="#">Get to know me</a>
                    </div>
                    <div className="hero-button">
                        <img src="/green_arrow.png" id="icon" />
                        <a href="#">Check out my work</a>
                    </div>
                </div>
            </section>
            <img src="/bottom_wave.png" className="bottom-wave" />

            <style jsx>{`
                .hero-banner {
                    height: 70vh;
                    background-color: #F6F3EE;
                    position: relative;
                }
        
                .hero-content {
                    display: flex;
                    align-items: center;
                    padding: 28px 2.5%;
                }
        
                .hero-image {
                    width: 50%;
                    height: 400px;
                    border: 1px solid pink;
                }
                
                .hero-blurb {
                    width: 45%;
                    font-size: 1.8rem;
                    padding-left: 48px;
                }
        
                .hero-blurb h1 {
                    font-size: 4.8rem;
                    font-family: 'Crimson Text', serif;
                    color: #00857D;
                    margin: 0;
                    padding: 0;
                }

                .hero-button {
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                }

                .hero-button img {
                    width: 28px;
                    margin-right: 12px;
                }

                .hero-button a {
                    text-decoration: none;
                    color: #00857D;
                    text-transform: uppercase;
                    font-size: 1.4rem;
                    font-weight: 500;
                }

                .bottom-wave {
                    position: absolute;
                    width: 100%;
                    top: 70vh;
                }

                .hero-button:hover > #icon {
                    animation: swing 1s ease;
                    animation-iteration-count: 1;
                }

                @keyframes swing {
                    20% {
                    transform: translateX(3px);
                    }
                    40% {
                    transform: translateX(-3px);
                    }
                    60% {
                    transform: translateX(2px);
                    }
                    80% {
                    transform: translateX(-1px);
                    }
                    100% {
                    transform: translateX(0);
                }
            `}</style>
        </section>
    )
}

export default HeroBanner;