import Head from 'next/head'
import TopNav from './components/TopNav'
import HeroBanner from './components/HeroBanner'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Elysia Gabe | Web Developer</title>
        <link rel="icon" href="/EG_favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <TopNav />
        <HeroBanner />

        {/* PROJECTS: MySchool, Sunsama blog, Replate landing page, something else... */}
        <Projects />

        {/* ABOUT: Background, Skills, Resume, Non-work stuff*/}
        <About />

        {/* CONTACT: Email, GitHub, LinkedIn, Contact Form */}
        <Contact />
        
      </main>

      <Footer />

      <style jsx>{`




        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

 

        .logo {
          height: 1em;
        }


      `}</style>

      <style jsx global>{`
        html,
        body {
          color: #333;
          padding: 0;
          margin: 0;
          max-width: 100%;
          font-family: 'Avenir', 'Helvetica Neue', 'Roboto', sans-serif;
          font-size: 62.5%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
