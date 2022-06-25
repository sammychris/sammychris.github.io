import React from "react";

const paragrahp = (str) => {
  const strArr = [];
  "samule \n john".replace("\n");
};
const Project = ({
  bg,
  demoUrl,
  title,
  date,
  codeUrl,
  description,
  stacks,
  children,
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
          target={demoUrl ? "_blank" : "#"}
          rel="noopener noreferrer"
          href={demoUrl}
          className="project-img"
        >
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
