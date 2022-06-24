import React from "react";
import ProfileLink from "./ProfileLink";

const MyProfile = () => {
  return (
    <div id="profile">
      <div id="minimize">
        <header>
          <h1>Hey I'm Samuel</h1>
          <p style={{ marginTop: "5px" }}>a Web developer</p>
        </header>
        <main>
          <div id="profilePic">
            <img
              src="https://avatars0.githubusercontent.com/u/29807328?s=400&u=4e49f08616b02550468c8939aa644982f0052732&v=4"
              alt=""
            />
          </div>
          <footer>
            <ProfileLink
              url="mailto:ebusameric@gmail.com"
              name="envelope-square"
              // title="Email"
            />
            <ProfileLink
              url="https://github.com/sammychris"
              name="github"
              // title="Github"
            />
            <ProfileLink
              url="https://twitter.com/sammychrise"
              name="twitter"
              // title="Twitter"
            />
            <ProfileLink
              url="https://www.linkedin.com/in/sammychrise"
              name="linkedin"
            />
            <ProfileLink
              url="https://sammychris.hashnode.dev/"
              name="feed"
              // title="Blog"
            />
          </footer>
          <div id="about">
            <p>
              A web developer who lives in Lagos, Nigeria. I code every day and
              I'm always looking for an opportunity to design as well.
            </p>
          </div>
          <div id="skills">
            <h3>Skills:</h3>
            <div id="skill">
              {/* <span style={{ background: "#ca2b03" }}>HTML5</span>
              <span style={{ background: "#379ad6" }}>CSS3</span> */}
              <span style={{ background: "#cea000" }}>JavaScript</span>
              <span style={{ background: "#5ed4f3" }}>React</span>
              <span style={{ background: "#111" }}>Next.js</span>
              <span style={{ background: "#2f74c0" }}>TypeScript</span>
              {/* <span style={{ background: "#f5824c" }}>D3</span> */}
              {/* <span style={{ background: "#5f3f88" }}>Bootstrap</span> */}
              <span style={{ background: "#b55f8c" }}>Sass</span>
              <span style={{ background: "#7248b6" }}>Redux</span>
              <span style={{ background: "#3a8f24" }}>Nodejs</span>
              <span style={{ background: "#122838" }}>Express.js</span>
              {/* <span style={{ background: "#cea11a" }}>Unit Testing</span> */}
              <span style={{ background: "#42a139" }}>MongoDB</span>
              <span style={{ background: "#008aad" }}>Docker</span>
              <span style={{ background: "#6d6d6d" }}>GCP</span>
              <span style={{ background: "#252e3c" }}>AWS</span>
              <span style={{ background: "#30302f" }}>{"SPA & SSR"}</span>
              <span style={{ background: "#c02f2a" }}>Redis</span>
              <span style={{ background: "#c81753" }}>Testing</span>
              <span style={{ background: "#f0c21c" }}>{"CI & CD"}</span>
              <span style={{ background: "#5cbb6e" }}>
                {"Web Performance & Security"}
              </span>
              <span style={{ background: "#e94e31" }}>Git</span>
              <span style={{ background: "#092954" }}>Native English</span>
              <span style={{ background: "#0d090b" }}>Technical Writing</span>
              <span style={{ background: "#35a6c2" }}>
                {"Collaboration & Teamwork"}
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProfile;
