const colors = (stack) => {
  stack = stack.toLowerCase();
  const color = {
    react: { name: "React", bg: "#5ed4f3" },
    redux: { name: "Redux", bg: "#7248b6" },
    gatsby: { name: "Gatsbyjs", bg: "#633194" },
    typescript: { name: "TypeScript", bg: "#2f74c0" },
    next: { name: "Next.js", bg: "#111" },
    node: { name: "Nodejs", bg: "#3a8f24" },
    html5: { name: "HTML5", bg: "#ca2b03" },
    javascript: { name: "JavaScript", bg: "#cea000" },
    d3: { name: "D3", bg: "#f5824c" },
    jquery: { name: "jQuery", bg: "#172c45" },
    sass: { name: "Sass", bg: "#b55f8c" },
    express: { name: "Expressjs", bg: "#888585" },
    mongodb: { name: "MongoDB", bg: "#42a139" },
    boostrap: { name: "Bootstrap", bg: "#5f3f88" },
    css3: { name: "CSS3", bg: "#379ad6" },
    redis: { name: "Redis", bg: "#c02f2a" },
    express: { name: "Express.js", bg: "#122838" },
    ci_cd: { name: "CI & CD", bg: "#f0c21c" },
    tdd: { name: "TDD", bg: "#c81753" },
    docker: { name: "Docker", bg: "#008aad" },
    gcp: { name: "GCP", bg: "#6d6d6d" },
    aws: { name: "AWS", bg: "#252e3c" },
    pg: { name: "Posgress", bg: "#3a8f24" },
    knex: { name: "Knexjs", bg: "#e94e31" },
    spa_ssr: { name: "SPA & SSR", bg: "#30302f" },
    microservices: { name: "MicroServices", bg: "#009cda" },
    git: { name: "Git", bg: "#e94e31" },
    web: { name: "Web Performance & Security", bg: "#5cbb6e" },
    english: { name: "Native English", bg: "#092954" },
    writing: { name: "Technical Writing", bg: "#0d090b" },
    teamwork: { name: "Collaboration & Teamwork", bg: "#35a6c2" },
  }[stack];

  // if undefined - return something...
  if (!color || !stack) {
    return { bg: "#284748", name: stack[0].toUpperCase() + stack.slice(1) };
  }

  return color;
};

export default colors;
