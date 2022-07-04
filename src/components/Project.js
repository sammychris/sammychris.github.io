import React from "react";
import QueryImage from "./QueryImage";
import Stacks from "./Stacks";

const Project = ({
  bg,
  demoUrl,
  title,
  date,
  codeUrl,
  description,
  stacks,
  imgName,
  children,
}) => {
  console.log({ imgName });
  return (
    <div
      className="contents"
      style={{ backgroundColor: bg ? "rgb(43, 43, 43)" : "" }}
    >
      <div className="each-project">
        <a
          target={demoUrl ? "_blank" : "#"}
          rel="noopener noreferrer"
          href={demoUrl}
          className="project-img"
        >
          {/* {stacks
            ?.replace(/\s/g, "")
            ?.split(",")
            ?.map((stack, i) => (
              <Stacks stack={stack} index={i} key={i} />
            ))} */}

          {children}
        </a>
        <div className="project-info">
          <h1>
            <span>{title}</span>
            <span className="dates">{date}</span>
          </h1>
          <div className="text-btn">
            {description && (
              <div className="text">
                {description.split("\n\n").map((paragrahpText) => (
                  <p>
                    {paragrahpText.split("\n").map((breakText) => (
                      <>
                        {breakText}
                        <br />
                      </>
                    ))}
                  </p>
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
