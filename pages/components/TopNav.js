const TopNav = () => {
    return (
        <section className="top-nav">
            <div className="title">
                <a href="/" >Elysia Gabe</a>
            </div>
            <nav className="nav-links">
                <a href="#projects" className="animoBorderLeftRight">Projects</a>
                <a href="#about" className="animoBorderLeftRight">About</a>
                <a href="#contact" className="animoBorderLeftRight">Contact</a>
            </nav>

            <style jsx>{`
                .top-nav {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: baseline;
                    background-color: #F6F3EE;
                    padding: 28px 2.5% 0;
                }

                .title {
                    text-transform: uppercase;
                    font-size: 2.4rem;
                    color: #00857D;
                    font-weight: bold;
                    letter-spacing: 1px;
                    line-height: .8;
                    padding-bottom: 8px;
                    width: 100%;
                    text-align: center;
                }

                .title a {
                    color: #00857D;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    z-index: 10;
                    width: 80%;
                    justify-content: space-between;
                    margin: 0 auto;
                }

                .nav-links a {
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    color: #333;
                    padding: 0 2px 8px;
                    text-decoration: none;
                    line-height: 1;
                    margin-top: 20px;
                }

                .animoBorderLeftRight {
                    display:inline-block;
                    position:relative;
                    cursor:pointer
                }

                .animoBorderLeftRight::after {
                    content:'';
                    position:absolute;
                    width:100%;
                    transform:scaleX(0);
                    height:2px;
                    bottom:0;
                    left:0;
                    background-color:#00857D;
                    transform-origin:bottom right;
                    transition:transform .4s cubic-bezier(.86,0,.07,1)
                }

                .animoBorderLeftRight:hover::after {
                    transform:scaleX(1);
                    transform-origin:bottom left
                }

                @media(min-width: 480px) {
                    .title {
                        width: 50%;
                        text-align: left;
                    }

                    .nav-links {
                        justify-content: flex-end;
                        width: 50%;
                    }

                    .nav-links a {
                        margin-left: 32px;
                        margin-top: 0;
                    }
                }
            `}</style>
        </section>
    )
}

export default TopNav;