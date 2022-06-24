import * as React from "react";
import { Link } from "gatsby";
import HeaderLink from "./HeaderLink";
import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import MyProfile from "./MyProfile";

const MainPage = ({ children }) => {
  const [store, setStore] = useState(null);
  const [projects, setProjects] = useState(null);
  const scroll = useRef();

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>Sammy C. Okanume. -- A Web Developer Portfolio</title>
      </Helmet>
      <MyProfile />
      <div id="projects" ref={scroll}>
        <header>
          <div className="contacts">
            <HeaderLink
              url="mailto:ebusameric@gmail.com"
              title="Email"
              name="envelope-square"
            />
            <HeaderLink
              url="https://github.com/sammychris"
              title="Github"
              name="github"
            />
            <HeaderLink
              url="https://twitter.com/sammychrise"
              title="Twitter"
              name="twitter"
            />
            <HeaderLink
              url="https://www.linkedin.com/in/sammychrise"
              title="LinkedIn"
              name="linkedin"
            />
            <HeaderLink
              url="https://sammychris.hashnode.dev/"
              title="Blog"
              name="feed"
            />
          </div>
        </header>
        <main>
          <div id="list-header">
            <p>The newest projects are selected from the top</p>
            {/* <nav>
              <Link to="/" activeClassName="active">
                Home
              </Link>
              <Link to="/posts" activeClassName="active">
                Posts
              </Link>
              <Link to="/projects" activeClassName="active">
                Projects
              </Link>
              <Link to="/about-me" activeClassName="active">
                About Me
              </Link>
              <Link to="/resume" activeClassName="active">
                Resume
              </Link>
            </nav> */}
          </div>
          {children}
        </main>
        <footer id="footer">
          <div style={{ textAlign: "center" }}>
            <h2>Let's work together...</h2>
            <p>
              How do you take your coffee?
              <a href="mailto:ebusameric@gmail.com"> Email Me!</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
