import * as React from "react";
import Project from "../components/Project";
import Stacks from "../components/Stacks";
import "./index.css";
import MainPage from "../components/MainPage";
import QueryImage from "../components/QueryImage";

const IndexPage = () => {
  return (
    <MainPage>
      <div id="all-projects" className="first">
        <Project
          title="Ecommerce Frontend Challenge"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/frontend-challenge"
          description={`A simple ecommerce App.
          That Add/remove products and change quantities on cart page, PLP, and PDP.
          Select product options and view them in cart overlay and cart page.
          Filter products by category and display visual representation of swatch attributes on PLP and PDP.
          Parse and display HTML descriptions as HTML.
          Change store currency to one of the available options.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="style-components" index={2} />
          <Stacks stack="graghql" index={3} />
          <QueryImage name="ecommerce_frontend-challenge" />
        </Project>

        <Project
          title="360SoccerConnect"
          date=""
          bg={true}
          demoUrl="https://360soccerconnect.com/"
          description={`A sport web application, that displays players, coaches, clubs, agents, and scouts profile info. And connects them to their prospective clubs in the future.
          
          I'm current working as the only web developer, responsible for the front-end, back-end, UI, UX designs, projects management, and database structure and design.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="next" index={2} />
          <Stacks stack="mongodb" index={3} />
          <Stacks stack="authentication" index={4} />
          <Stacks stack="gcp" index={5} />
          <Stacks stack="web" index={6} />
          <Stacks stack="docker" index={7} />
          <QueryImage name="360soccerconnect" />
        </Project>

        <Project
          title="Oneuptime"
          date=""
          demoUrl="https://oneuptime.com/"
          codeUrl="https://github.com/OneUptime/oneuptime"
          imgName="oneuptime"
          stacks="react, typescript, mongodb, helment, jest, docker"
          description={`OneUptime is an open-source complete SRE and DevOps platform.
          
          I was able to participate in this project, by writing a complete test for all the pages in the app using puppeteer and jest`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="typescript" index={1} />
          <Stacks stack="mongodb" index={2} />
          <Stacks stack="puppeteer" index={3} />
          <Stacks stack="jest" index={4} />
          <Stacks stack="gdockercp" index={5} />
          <QueryImage name="oneuptime" />
        </Project>

        <Project
          title="Maintenance Tracker"
          date=""
          demoUrl="https://sammychris.github.io/MaintenanceTracker/"
          codeUrl="https://github.com/sammychris/MaintenanceTracker"
          description={`A maintenance tracker tool that helps individuals or organizations track and manage the maintenance and repair of physical assets or equipment. 
          
          It is typically used to schedule, record, and track the maintenance and repair work that is performed on various assets, such as vehicles, machinery, or facilities.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="maintenance-tracker" alt="" />
        </Project>

        {/* <Project
          title="Hello Books"
          date="2017"
          bg={true}
          demoUrl="https://sammychris.github.io/hellobooks/"
          codeUrl="https://github.com/sammychris/hellobooks"
          description={`A full-stack Andela two-weeks bootcamp project.
          A book library app, that allows users to borrow,
          read, and return a borrowed book. And admin can upload, update and delete a book.
          
          This was my first Full-Stack project, and my first time of using React, Node, Git, and Github.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="authentication" index={3} />
          <Stacks stack="mocha" index={4} />
          <Stacks stack="chai" index={5} />
          <QueryImage name="hellobooks" alt="" />
        </Project> */}

        <Project
          title="Heat Map"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/d3-heat-map"
          codeUrl="https://github.com/sammychris/d3-heat-map"
          description={`A heat map built with d3 that displays the monthly global land-surface temperature from 1753 to 2015 can be a useful tool for understanding and analyzing long-term temperature trends and patterns. 
          
          The heat map can show the differences in temperature between different months and years, as well as the overall changes in temperature over time.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="d3-heat-map" alt="" />
        </Project>

        <Project
          title="RoboFriends"
          date=""
          demoUrl="https://sammychris.github.io/robofriends/"
          codeUrl="https://github.com/sammychris/robofriends"
          description={`This project was created for learning purpose, while on my path of becoming senior developer.
          It's an App that displays random robot pictures using Api.
          
          Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing
            with Jest and Enzymes.
          `}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="tachyons" index={2} />
          <Stacks stack="typescript" index={3} />
          <Stacks stack="jest" index={4} />
          <Stacks stack="enzymes" index={5} />
          <QueryImage name="robofriends" alt="" />
        </Project>

        <Project
          title="Scatter Plot"
          date=""
          demoUrl="https://sammychris.github.io/d3-scatter-plot/"
          codeUrl="https://github.com/sammychris/d3-scatter-plot"
          description={`A scatter plot built with d3 that displays the doping in professional bicycle racing could be a graphical representation of data that shows the relationship between two variables, with one variable represented on the x-axis and the other represented on the y-axis.
          
          The scatter plot use different colors to distinguish between riders who have been implicated in doping and those who have not.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="d3-scatter-plot" alt="" />
        </Project>

        <Project
          title="Pomodoro Clock"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/pomodoro-clock/"
          codeUrl="https://github.com/sammychris/pomodoro-clock"
          description={`A simple app that tracks session and break time, and sets a count-down timer to track both times. You click the big play button displayed on the screen to get started. And both session and break timer can be adjusted using their buttons.
          
          Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing with Jest and Enzymes.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="sass" index={2} />
          <Stacks stack="typescript" index={3} />
          <Stacks stack="jest" index={4} />
          <Stacks stack="enzymes" index={5} />
          <QueryImage name="pomodoro-timer" alt="" />
        </Project>

        <Project
          title="JavaScript Calculator"
          date=""
          demoUrl="https://sammychris.github.io/calculator/"
          codeUrl="https://github.com/sammychris/calculator"
          description={`A Calculator App created for FreeCodeCamp back then. It contains buttons for inputs values, you can add, subtract, divide,and multiply after total evaluated calculations.
          Just recently updated and upgraded.
          
          Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing with Jest and Enzymes.`}
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="redux" index={2} />
          <Stacks stack="sass" index={3} />
          <Stacks stack="typescript" index={4} />
          <Stacks stack="jest" index={5} />
          <Stacks stack="enzymes" index={6} />
          <QueryImage name="calculator" alt="" />
        </Project>

        <Project
          title="Drum Machine"
          date=""
          demoUrl="https://sammychris.github.io/drum-machine/"
          codeUrl="https://github.com/sammychris/drum-machine"
          description={`A Drum Machine App created for FreeCodeCamp back then. It contains buttons for inputs values, and sounds via external API.
          Just recently updated and upgraded.
          
          Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing with Jest and Enzymes.`}
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="redux" index={2} />
          <Stacks stack="sass" index={3} />
          <Stacks stack="typescript" index={4} />
          <Stacks stack="jest" index={5} />
          <Stacks stack="enzymes" index={6} />
          <QueryImage name="drum-machine" alt="" />
        </Project>

        <Project
          title="Choropleth Map"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/d3-choropleth-map/"
          codeUrl="https://github.com/sammychris/d3-choropleth-map"
          description={`A choropleth map built with d3 that displays the percentage of adults age 25 and older with a bachelor's degree or higher would show different colors to represent the different levels of educational attainment within a specific geographic region.
        A
          Qreas with a high percentage of adults with a bachelor's degree or higher are shown in a darker blue, while areas with a lower percentage are shown in a lighter blue.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="d3-choropleth-map" alt="" />
        </Project>

        <Project
          title="Tree Map"
          date=""
          demoUrl="https://sammychris.github.io/d3-tree-map"
          codeUrl="https://github.com/sammychris/d3-tree-map"
          description={`Tree Map built with d3 that displays the Top 100 Most Sold Video Games Grouped by Platform color is a visual representation of data that displays the relative size of different video game platforms in relation to one another.
          
          The Tree Map is organized such that the size of each platform is proportional to the total number of video games sold on that platform, and the color of each platform is determined by the platform's category.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="d3-tree-map" alt="" />
        </Project>

        <Project
          title="Bar Chart"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/d3-barchart/"
          codeUrl="https://github.com/sammychris/d3-barchart"
          description={`A bar chart built with D3 that displays the (GDP) of a country over a period of time. In this case, the bar chart would show the GDP from 1950 to 2015. The x-axis of the chart would represent the years from 1950 to 2015, and the y-axis would represent the GDP values.
          
          Each bar on the chart would represent the GDP for a particular year, with the height of the bar indicating the GDP value for that year. The chart would allow users to easily visualize and compare the GDP values over the specified time period.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="d3-barchart" alt="" />
        </Project>

        <Project
          title="Habit Tracker"
          date=""
          bg={true}
          demoUrl="https://chingu-habit-tracker.herokuapp.com/"
          codeUrl="https://github.com/chingu-voyages/bears-project-8"
          description={`An application that helps users track and maintain habits, such as exercising, eating healthy, or practicing a new skill.
          
          This app allows users to set goals and create a schedule for their habits, reminders, motivation, and analytics to help users stay on track and reach their goals. I worked with some group developers. I worked on both front, backend and designs using figma`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="habit-tracker" alt="" />
        </Project>

        {/* <Project
          title="Smart Brain"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/smart-brain"
          codeUrl="https://github.com/sammychris/smart-brain"
          description={`This app detects the faces of people on images. 
          
          This project was created for learning purpose, while on my path of becoming senior developer.`}
        >
          <Stacks stack="javascript" index={0} />
          <Stacks stack="react" index={1} />
          <Stacks stack="tachyons" index={2} />
          <QueryImage name="pending_project" alt="" />
        </Project>

        <Project
          title="Smart Brain Api"
          date=""
          demoUrl="https://sammychris.github.io/smart-brain-api"
          codeUrl="https://github.com/sammychris/smart-brain-api"
          description="Serves as the Api for Smart brain app. This uses the Clarifai API along side the right credentials to connect Clarifai."
        >
          <Stacks stack="express" index={0} />
          <Stacks stack="authentication" index={1} />
          <Stacks stack="pg" index={2} />
          <Stacks stack="knex" index={3} />
          <QueryImage name="pending_project" alt="" />
        </Project> */}

        <Project
          title="Keiko Corp"
          date="2022"
          bg={true}
          demoUrl="https://sammychris.github.io/keiko-corp/"
          codeUrl="https://github.com/sammychris/keiko-corp"
          description={`A simple static Html, Css and Javascript project, that display simple static webpages.
          I got involve with this project when I enrol for a Junior to Senior Developer Road Map on Udemy.

          Learning Purpose: website optimization and performance.
          `}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="keiko-corp" alt="" />
        </Project>

        <Project
          title="Product Landing Page"
          date="2019"
          bg={true}
          demoUrl="https://sammychris.github.io/Product-Landing-Page/"
          codeUrl="https://github.com/sammychris/Product-Landing-Page"
          description={`A Product Landing Page, FreeCodeCamp's projects with pure css and html while learning.
            Using css flexbox and media query for page responsiveness and for any devices. Recently updated the project to update my skills.
            
            Learning Purpose: website optimization and performance.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <QueryImage name="landing-page" alt="" />
        </Project>

        {/* <Project
          title="Journal App"
          date=""
          bg={true}
          // demoUrl="https://sammychris.github.io/Journal-App/"
          codeUrl="https://github.com/sammychris/Journal-App"
          description={`A full-stack chingu voyage prework project.
          This app allows users to share their journal to other users for the to see and read.
          
          This involves helping others to learn and share their experiences and knowledge about life, health, career, politics, social, and more, in a form of topic.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="sass" index={2} />
          <Stacks stack="express" index={3} />
          <Stacks stack="mongoose" index={4} />
          <Stacks stack="authentication" index={5} />
          <QueryImage name="pending_project" alt="" />
        </Project>

        <Project
          title="React Patterns"
          date=""
          // demoUrl="https://sammychris.github.io/Technical-Documentation-Page/"
          codeUrl="https://github.com/sammychris/react-patterns"
          description={`A project I created while learning more about React patterns and use cases.
          
          Learning Purpose: Higher order component, Presentation and Container component, and React custom Hooks`}
        >
          <Stacks stack="react" index={0} />
          <QueryImage name="pending_project" alt="" />
        </Project>

        <Project
          title="Todo Lists"
          date=""
          bg={true}
          // demoUrl="https://sammychris.github.io/todo-list/"
          codeUrl="https://github.com/sammychris/todo-list"
          description={`A front-end project I created while why I enrol for a senior developer programm.
            
            Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing
            with Jest and Enzymes.
            `}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="typescript" index={2} />
          <Stacks stack="jest" index={3} />
          <Stacks stack="enzymes" index={4} />
          <QueryImage name="pending_project" alt="" />
        </Project>

        <Project
          title="Funny Calculator"
          date=""
          // demoUrl="https://sammychris.github.io/funny-calculator/"
          codeUrl="https://github.com/sammychris/funny-calculator"
          description={`A front-end project I created to upgrade my skills. Also with well written testcases.
          
          Learning Purpose: TypeScript, Redux, Presentational and Container component, and React testing
          with Jest and Enzymes.`}
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="redux" index={1} />
          <Stacks stack="typescript" index={2} />
          <Stacks stack="jest" index={3} />
          <Stacks stack="enzymes" index={4} />
          <QueryImage name="pending_project" alt="" />
        </Project> */}

        {/* <Project
          title="Hospital Record App"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/Strapi-Hospital-Records-App/"
          codeUrl="https://github.com/sammychris/Strapi-Hospital-Records-App"
          description="A full-stack project created using next and strapi-api"
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="next" index={1} />
          <Stacks stack="strapi-Api" index={2} />
          <QueryImage name="pending_project" alt="" />
        </Project> */}

        {/* <Project
          title="Jakas Autoparts"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/Jakaz-autoparts/"
          codeUrl="https://github.com/sammychris/Jakaz-autoparts"
          description="A full-stack project I created for a client. This app help list the client autopart product. The app is semilar to an e-commerce platform."
        >
          <Stacks stack="react" index={0} />
          <Stacks stack="sass" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="mysql" index={3} />
          <Stacks stack="authentication" index={4} />
          <QueryImage name="pending_project" alt="" />
        </Project> */}

        {/* <Project
          title="Issue Tracker"
          date=""
          demoUrl="https://sammychris.github.io/issue-tracker /"
          codeUrl="https://github.com/sammychris/issue-tracker "
          description="This is a project I built while learning with freeCodeCamp. It was an amazing experience"
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="node" index={2} />
          <Stacks stack="express" index={3} />
          <QueryImage name="pending_project" alt="" />
        </Project> */}

        <Project
          title="Anon Message Board"
          date=""
          demoUrl="https://sammychris-fcc-message-board.glitch.me/"
          codeUrl="https://github.com/sammychris/fcc-message-board"
          description=""
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="anon-message-board" alt="" />
        </Project>

        <Project
          title="Meteorite Explorer"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/meteorite-explorer/"
          codeUrl="https://github.com/sammychris/meteorite-explorer"
          description={`
          An app created for Chingu voyage 37.
          It displays data from the Nasa Open Data Portal Meteorite Landings using API.
          `}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <QueryImage name="meteorite-explorer" alt="" />
        </Project>

        <Project
          title="Metric Imperial Converter"
          date=""
          demoUrl="https://sammychris-metric-imperial-converter.glitch.me/"
          codeUrl="https://github.com/sammychris/metric-imperial-converter"
          description={`
          A full-stack FreeCodeCamp project that uses API to measurement units and converts one unit to another
          back and forth. Eg: miles (mi) to kilometers (km),
          pounds (lbs) to kilograms (kg),
          and gallons (gal) to liters (L)`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="javascript" index={2} />
          <Stacks stack="express" index={3} />
          <Stacks stack="node" index={4} />
          <QueryImage name="metric-imperial-converter" alt="" />
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
          <QueryImage name="random-quote-machine" alt="" />
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
          <QueryImage name="survey-form" alt="" />
        </Project>

        <Project
          title="Stock Price Checker"
          date=""
          bg={true}
          demoUrl="https://sammychris.github.io/project-stock-checker/"
          codeUrl="https://github.com/sammychris/project-stock-checker"
          description={`Stock price checker app. A project I created while learning on FreeCodeCamp.
          This displays the prices of latest stocks in the market using an API that helps check the price of stocks.`}
        >
          <Stacks stack="html5" index={0} />
          <Stacks stack="css3" index={1} />
          <Stacks stack="express" index={2} />
          <Stacks stack="node" index={3} />
          <QueryImage name="stock-price-checker" alt="" />
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
          <QueryImage name="markdown-previewer" alt="" />
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
          <QueryImage name="simple-portfolio" alt="" />
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
          <QueryImage name="tribute-page" alt="" />
        </Project>

        <Project
          demoUrl="https://sammychris.github.io/Technical-Documentation-Page/"
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
          <QueryImage name="documentation-page" alt="" />
        </Project>
      </div>
    </MainPage>
  );
};

export default IndexPage;
