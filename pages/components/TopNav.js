const TopNav = () => {
    return (
        <section className="top-nav">
            <div className="title">
            <a href="/" >
                Elysia Gabe
            </a>
            </div>
            <nav className="nav-links">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>

            <style jsx>{`
                .top-nav {
                    display: flex;
                    align-items: flex-end;
                    background-color: #F6F3EE;
                    padding: 28px 2.5% 48px;
                }

                .title {
                    text-transform: uppercase;
                    font-size: 2.4rem;
                    color: #00857D;
                    font-weight: bold;
                    width: 50%;
                    letter-spacing: 1px;
                    line-height: .8;
                }

                .title a {
                    color: #00857D;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    justify-content: flex-end;
                    width: 50%;
                }

                .nav-links a {
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    color: #333;
                    padding-left: 32px;
                    text-decoration: none;
                    // border: 1px solid red;
                    line-height: 1;
                }

                .nav-links a:hover {
                    color: #00857D;
                }
            `}</style>
        </section>
    )
}

export default TopNav;