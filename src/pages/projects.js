import * as React from "react";
import Project from "../components/Project";
import "./index.css";
import MainPage from "../components/MainPage";

const IndexPage = () => {
  return (
    <MainPage>
      <div id="all-projects" className="first">
        <Project
          bg={true}
          demoUrl=""
          imgUrl=""
          title=""
          date=""
          codeUrl=""
          description=""
        />
        <Project
          demoUrl=""
          imgUrl=""
          title=""
          date=""
          codeUrl=""
          description=""
        />
      </div>
    </MainPage>
  );
};

export default IndexPage;
