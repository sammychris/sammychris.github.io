import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Project = ({
  bg,
  demoUrl,
  imgUrl,
  title,
  date,
  codeUrl,
  description,
  stacks,
}) => {
  // const Descript = description
  //   ?.split(".")
  //   .map((a) => <p>{a}.</p>);
  // const dateStr = new Date(props?.project?.create_on).toDateString();

  // const Skills = props?.project?.skills.map((a, i) => (
  //   <span style={{ background: stacks(a).background, top: i * 30 }}>
  //     {stacks(a).name}
  //   </span>
  // ));
  return (
    <div
      className="contents"
      style={{ backgroundColor: bg ? "rgb(43, 43, 43)" : "" }}
    >
      <div className="each-project">
        <a
          target={imgUrl ? "_blank" : "#"}
          rel="noopener noreferrer"
          href={demoUrl}
          className="project-img"
        >
          {/* {Skills} */}
          {imgUrl && <StaticImage src={`../images/${imgUrl}`} alt="" />}
        </a>
        <div className="project-info">
          <h1>
            <span>{title}</span>
            <span className="dates">{date}</span>
          </h1>
          <div className="text-btn">
            {description && (
              <div className="text">
                {description.split(".").map((text) => (
                  <p>{text}.</p>
                ))}
              </div>
            )}
            <div className="btn-container">
              <div className="buttons">
                {codeUrl && (
                  <a target="_blank" rel="noopener noreferrer" href={codeUrl}>
                    Code
                  </a>
                )}
                {demoUrl && (
                  <a target="_blank" rel="noopener noreferrer" href={demoUrl}>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
