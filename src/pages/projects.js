import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Project from "../components/Project";
import Stacks from "../components/Stacks";
import "./index.css";
import MainPage from "../components/MainPage";

const ProjectsPage = () => {
  return (
    <MainPage>
      <div id="all-projects" className="first">
        <Project
          title="360SoccerConnect"
          date=""
          bg={true}
          demoUrl="https://360soccerconnect.com/"
          description="A sport web application, that displays players, coaches, clubs, agents, and scouts profile info. And connects them to their prospective clubs in the future.
          I'm current working as the only web developer, responsible for the front-end, back-end, UI, UX designs, projects management, and database structure and design."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="next" index={2} />
          <Stacks stack="mongodb" index={3} />
          <Stacks stack="docker" index={4} />
          <Stacks stack="gcp" index={5} />
          <Stacks stack="web" index={6} />
          <StaticImage src="../images/360soccerconnect.png" alt="" />
        </Project>

        <Project
          title="Oneuptime"
          date=""
          demoUrl="https:/oneuptime.com/"
          codeUrl="https:/github.com/OneUptime/oneuptime"
          description="OneUptime is an open-source complete SRE and DevOps platform. I was able to participate in this project, by writing a complete test for all the pages in the app using helmet and jest"
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="typescript" index={1} />
          <Stacks stack="mongodb" index={2} />
          <Stacks stack="helmet" index={3} />
          <Stacks stack="jest" index={4} />
          <Stacks stack="docker" index={5} />
          <StaticImage src="../images/oneuptime.png" alt="" />
        </Project>

        <Project
          title="Smart Brain"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/smart-brain"
          codeUrl="https://github.com/sammychris/smart-brain"
          description="This app detects the faces of people on images. This project was created for learning purpose, while on my path of becoming senior developer."
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="tachyons" index={2} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Smart Brain Api"
          date=""
          demoUrl="https:/sammychris.github.io/smart-brain-api"
          codeUrl="https://github.com/sammychris/smart-brain-api"
          description="Serves as the Api for Smart brain app. This uses the Clarifai API along side the right credentials to connect Clarifai."
        >
          <Stacks stack="express" index={0} />
          <Stacks stack="authentication" index={1} />
          <Stacks stack="pg" index={2} />
          <Stacks stack="knex" index={3} />
          <Stacks stack="auth" index={4} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Journal App"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/Journal-App/"
          codeUrl="https://github.com/sammychris/Journal-App"
          description="A full-stack chingu voyage prework project. This app allows users to share their journal to other users for the to see and read. This involves helping others to learn and share their experiences and knowledge about life, health, career, politics, social, and more, in a form of topic."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="sass" index={2} />
          <Stacks stack="express" index={3} />
          <Stacks stack="mongoose" index={4} />
          <Stacks stack="auth" index={5} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="React Patterns"
          date=""
          // demoUrl="https:/sammychris.github.io/Technical-Documentation-Page/"
          codeUrl="https://github.com/sammychris/react-patterns"
          description="A project I created while learning more about React patterns and use cases."
        >
          <Stacks stack="react" index={0} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Todo Lists"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/todo-list/"
          codeUrl="https://github.com/sammychris/todo-list"
          description="A front-end project I created while on my path of becoming of senior web developer, with well written testcases"
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="typescript" index={2} />
          <Stacks stack="jest" index={3} />
          <Stacks stack="enzymes" index={4} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Funny Calculator"
          date=""
          demoUrl="https:/sammychris.github.io/funny-calculator/"
          codeUrl="https://github.com/sammychris/funny-calculator"
          description="A front-end project I created to upgrade my skills. Also with well written testcases."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="typescript" index={2} />
          <Stacks stack="jest" index={3} />
          <Stacks stack="enzymes" index={4} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Hospital Record App"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/Strapi-Hospital-Records-App/"
          codeUrl="https://github.com/sammychris/Strapi-Hospital-Records-App"
          description="A full-stack project created using next and strapi-api"
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="next" index={1} />
          <Stacks stack="strapi-Api" index={2} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="RoboFriends"
          date=""
          demoUrl="https:/sammychris.github.io/robofriends/"
          codeUrl="https://github.com/sammychris/robofriends"
          description="This project was created for learning purpose, while on my path of becoming senior developer. It's an App that displays random robot pictures using Api."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="tachyons" index={2} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Jakas Autoparts"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/Jakaz-autoparts/"
          codeUrl="https://github.com/sammychris/Jakaz-autoparts"
          description="A full-stack project I created for a client. This app help list the client autopart product. The app is semilar to an e-commerce platform."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="sass" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="mysql" index={3} />
          <Stacks stack="auth" index={4} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Issue Tracker"
          date=""
          demoUrl="https:/sammychris.github.io/issue-tracker /"
          codeUrl="https://github.com/sammychris/issue-tracker "
          description="This is a project I built while learning with freeCodeCamp. It was an amazing experience"
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="node" index={2} />
          <Stacks stack="express" index={3} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Hello Books"
          date="2017"
          bg={true}
          demoUrl="https:/sammychris.github.io/hellobooks/"
          codeUrl="https://github.com/sammychris/hellobooks"
          description={`A full-stack Andela two-weeks bootcamp project.
          We were ask to make a book library app, that allows users to borrow,
          read, and return a borrowed book. And admin can upload, update and delete a book.
          This was my first Full-Stack project, and my first time of using React, Node, Git, and Github.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="authentication" index={3} />
          <Stacks stack="mocha" index={4} />
          <Stacks stack="chai" index={5} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Anon Message Board"
          date=""
          demoUrl="https:/sammychris.github.io/fcc-message-board/"
          codeUrl="https://github.com/sammychris/fcc-message-board"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="Keiko Corp"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/keiko-corp/"
          codeUrl="https://github.com/sammychris/keiko-corp"
          description={`A simple static Html, Css and Javascript project, that display simple static webpages.
          This project was for learning purpose: website optimization and how to increase a website performance.
          I got involve with this project when I enrol for a Junior to Senior Developer Road Map on Udemy.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/anon-message-board" alt="" />
        </Project>

        <Project
          title="JavaScript Calculator"
          date=""
          demoUrl="https:/sammychris.github.io/calculator/"
          codeUrl="https://github.com/sammychris/calculator"
          description={`A Calculator App created for FreeCodeCam, while I was learning frontend developmenent.
          This app contains buttons for inputs values.You can add, subtract, divide,
          and multiply after total evaluated calculations. I recently updated and upgraded`}
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="redux" index={2} />
          <Stacks stack="sass" index={3} />
          <StaticImage src="../images/calculator" alt="" />
        </Project>

        <Project
          title="Heat Map"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/d3-heat-map"
          codeUrl="https://github.com/sammychris/d3-heat-map"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/d3-heat-map" alt="" />
        </Project>

        <Project
          title="Scatter Plot"
          date=""
          demoUrl="https:/sammychris.github.io/d3-scatter-plot/"
          codeUrl="https://github.com/sammychris/d3-scatter-plot"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/d3-scatter-plot" alt="" />
        </Project>

        <Project
          title="Choropleth Map"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/d3-choropleth-map/"
          codeUrl="https://github.com/sammychris/d3-choropleth-map"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/d3-choropleth-map" alt="" />
        </Project>

        <Project
          title="Tree Map"
          date=""
          demoUrl="https:/sammychris.github.io/d3-tree-map"
          codeUrl="https://github.com/sammychris/d3-tree-map"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/d3-tree-map" alt="" />
        </Project>

        <Project
          title="Bar Chart"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/d3-barchart/"
          codeUrl="https://github.com/sammychris/d3-barchart"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/d3-barchart" alt="" />
        </Project>

        <Project
          title="Drum Machine"
          date=""
          demoUrl="https://sammychris.github.io/drum-machine/"
          codeUrl="https://github.com/sammychris/drum-machine"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/drum-machine" alt="" />
        </Project>

        <Project
          title="Habit Tracker"
          date=""
          bg={true}
          demoUrl="https://chingu-habit-tracker.herokuapp.com/"
          codeUrl="https://github.com/chingu-voyages/bears-project-8"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/habit-tracker" alt="" />
        </Project>

        <Project
          title="Maintenance Tracker"
          date=""
          demoUrl="https:/sammychris.github.io/MaintenanceTracker/"
          codeUrl="https://github.com/sammychris/MaintenanceTracker"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/maintenance-tracker" alt="" />
        </Project>

        <Project
          title="Meteorite Explorer"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/meteorite-explorer/"
          codeUrl="https://github.com/sammychris/meteorite-explorer"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/meteorite-explorer" alt="" />
        </Project>

        <Project
          title="Metric Imperial Converter"
          date=""
          demoUrl="https:/sammychris.github.io/metric-imperial-converter/"
          codeUrl="https://github.com/sammychris/metric-imperial-converter"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <StaticImage src="../images/metric-imperial-converter" alt="" />
        </Project>

        <Project
          title="Pomodoro Clock"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/pomodoro-clock/"
          codeUrl="https://github.com/sammychris/pomodoro-clock"
          description={`A simple app that tracks session-time and break-time, and sets a count-down timer to track both times. 
          This is done by clicking on the big play button displayed on the screen.
          And both session-timer and break-timer can be adjusted using their buttons.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="typescript" index={2} />
          <Stacks stack="sass" index={3} />
          <StaticImage src="../images/pomodoro-timer" alt="" />
        </Project>

        <Project
          title="Random Quote Machine"
          date=""
          demoUrl="https://sammychris.github.io/random-quote-machine/"
          codeUrl="https://github.com/sammychris/random-quote-machine"
          description="This was my first react and sass app, created while learning on freeCodeCamp.
					This project gave me the flow of how react and sass works, and also how to make use of external Api."
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="sass" index={2} />
          <StaticImage src="../images/random-quote-machine" alt="" />
        </Project>

        <Project
          title="Product Landing Page"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/Product-Landing-Page/"
          codeUrl="https://github.com/sammychris/Product-Landing-Page"
          description={`A Product Landing Page, FreeCodeCamp's projects with pure css and html while learning. Using css flexbox and media query for page responsiveness and for any devices.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <StaticImage src="../images/landing-page" alt="" />
        </Project>

        <Project
          title="Survey Form"
          date=""
          demoUrl="https://sammychris.github.io/survey-form"
          codeUrl="https://github.com/sammychris/survey-form"
          description={`This is my second project on FCC while learning.
					I created this survey form with pure css, using css flexbox and media query including other css features.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <StaticImage src="../images/survey-form" alt="" />
        </Project>

        <Project
          title="Stock Price Checker"
          date=""
          bg={true}
          demoUrl="https:/sammychris.github.io/project-stock-checker/"
          codeUrl="https://github.com/sammychris/project-stock-checker"
          description={`Stock price checker app. A project I created while learning on FreeCodeCamp.
          This displays the prices of latest stocks in the market using an API that helps check the price of stocks.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="node" index={3} />
          <StaticImage src="../images/stock-price-checker" alt="" />
        </Project>

        <Project
          title="Markdown Previewer"
          date=""
          demoUrl="https://sammychris.github.io/markdown-previewer/"
          codeUrl="https://github.com/sammychris/markdown-previewer"
          description={`This was my second FreeCodeCamp React and Sass project I built while learning.`}
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="sass" index={2} />
          <StaticImage src="../images/markdown-previewer" alt="" />
        </Project>

        <Project
          title="FCC Portfolio Page"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/Portfolio-Page/"
          codeUrl="https://github.com/sammychris/Portfolio-Page"
          description={`This is a portfolio Design Page built by me,
          it's one of the freeCodeCamp's projects I did, while learning from them. 
          It's amazing both in design and very mobile friendly. 
          This page is built with pure css and html.
          The both skills I learnt are css flexboxs and media quarys.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <StaticImage src="../images/simple-portfolio" alt="" />
        </Project>

        <Project
          title="Henry Ford's Tribute page"
          date=""
          demoUrl="https://sammychris.github.io/Ford-Tribute-Page/"
          codeUrl="https://github.com/sammychris/Ford-Tribute-Page"
          description="This is was my first FCC project built while learning on FCC. 
					This page was built as a Tribute to Henry Ford known as American captain of industry."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <StaticImage src="../images/tribute-page" alt="" />
        </Project>

        <Project
          demoUrl="https:/sammychris.github.io/Technical-Documentation-Page/"
          title="JavaScript Documentation"
          date=""
          bg={true}
          codeUrl="https://github.com/sammychris/Technical-Documentation-Page"
          description="This is a Javascript Documentation Page built by me while learning with freeCodeCamp. 
					It has been an awesome experience for me, building well design and responsive web pages while learning with FCC. 
					The design is similar to that of FCC Js-Techinical-Documentation-page, which is amazing."
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <StaticImage src="../images/documentation-page" alt="" />
        </Project>
      </div>
    </MainPage>
  );
};

export default ProjectsPage;
