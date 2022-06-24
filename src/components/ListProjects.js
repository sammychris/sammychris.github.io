import React from "react";
import Project from "./Project";

const ListProjects = ({ projects, stacks }) => {
  return (
    <div id="all-projects" className="first">
      {/* {projects?.map((ele, i) => {
        if (i % 2 === 0)
          return ( */}
      <Project
        backgroundColor="rgb(43, 43, 43)"
        demoUrl=""
        imgUrl=""
        title=""
        date=""
        codeUrl=""
        description=""
        // stacks={stacks}
      />
      {/* ); */}
      <Project
        demoUrl=""
        imgUrl=""
        title=""
        date=""
        codeUrl=""
        description=""
        // stacks={stacks}
      />
      ;{/* })} */}
    </div>
  );
};

export default ListProjects;
