const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <section className="hero-content">
                <div className="hero-image">Placeholder</div>
                <div className="hero-blurb">
                    <h1>Aloha, I'm Elysia</h1>
                    <p>A full-stack web developer based in Oakland with roots in Hawaiʻi. I’m passionate about building impactful, scalable and accessible tech solutions for social good. </p>
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
        
                .bottom-wave {
                    position: absolute;
                    width: 100%;
                    top: 70vh;
                }
            `}</style>
        </section>
    )
}

export default HeroBanner;