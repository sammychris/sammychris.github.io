import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QueryImage = function ({ name, props }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                publicURL
                extension
                relativePath
                name
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      `}
      render={({ images }) => {
        const file = images.edges.find(({ node }) => {
          return node.name === name || node.relativePath.includes(name);
        });
        // const imageData = getImage(file.node);
        // return <GatsbyImage image={imageData} {...props} />;
        return <img src={file.node.publicURL} {...props} />;
      }}
    />
  );
};
export default QueryImage;
