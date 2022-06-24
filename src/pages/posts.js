import * as React from "react";
import "./index.css";
import MainPage from "../components/MainPage";

const IndexPage = () => {
  return (
    <MainPage>
      {" "}
      <div
        style={{
          height: 500,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Still in Progress...</p>
      </div>
    </MainPage>
  );
};

export default IndexPage;
