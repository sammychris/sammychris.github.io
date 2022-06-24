import React from "react";
import ProfileIcon from "./ProfileIcon";
import Stacks from "./Stacks";

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
            <ProfileIcon
              url="mailto:ebusameric@gmail.com"
              name="envelope-square"
              // title="Email"
            />
            <ProfileIcon
              url="https://github.com/sammychris"
              name="github"
              // title="Github"
            />
            <ProfileIcon
              url="https://twitter.com/sammychrise"
              name="twitter"
              // title="Twitter"
            />
            <ProfileIcon
              url="https://www.linkedin.com/in/sammychrise"
              name="linkedin"
            />
            <ProfileIcon
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
              <Stacks stack="javascript" />
              <Stacks stack="React" />
              <Stacks stack="Redux" />
              <Stacks stack="Sass" />
              <Stacks stack="TypeScript" />
              <Stacks stack="Next" />
              <Stacks stack="gatsby" />
              <Stacks stack="Node" />
              <Stacks stack="Express" />
              <Stacks stack="ci_cd" />
              <Stacks stack="Redis" />
              <Stacks stack="MongoDB" />
              <Stacks stack="pg" />
              <Stacks stack="knex" />
              <Stacks stack="TDD" />
              <Stacks stack="Docker" />
              <Stacks stack="gcp" />
              <Stacks stack="AWS" />
              <Stacks stack="spa_ssr" />
              <Stacks stack="MicroServices" />
              <Stacks stack="Git" />
              <Stacks stack="web" />
              <Stacks stack="English" />
              <Stacks stack="Writing" />
              <Stacks stack="Teamwork" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyProfile;
