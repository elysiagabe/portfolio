const TopNav = () => {
    return (
        <section className="top-nav">
            <div className="title">
                <a href="/" >Elysia Gabe</a>
            </div>
            <nav className="nav-links">
                <a href="#projects" className="animoBorderLeftRight">Projects</a>
                <a href="#about" className="animoBorderLeftRight">About</a>
                <a href="#" className="animoBorderLeftRight">Contact</a>
            </nav>

            <style jsx>{`
                .top-nav {
                    display: flex;
                    align-items: baseline;
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
                    padding-bottom: 8px;
                }

                .title a {
                    color: #00857D;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    justify-content: flex-end;
                    width: 50%;
                    z-index: 10;
                }

                .nav-links a {
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    color: #333;
                    margin-left: 32px;
                    padding: 0 2px 8px;
                    text-decoration: none;
                    line-height: 1;
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
            `}</style>
        </section>
    )
}

export default TopNav;