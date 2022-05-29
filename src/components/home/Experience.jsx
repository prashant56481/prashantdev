import React from "react";
import Amazon from "../../editable-stuff/amazon.png"
import Wipro from "../../editable-stuff/wipro.png";
import Kohbee from "../../editable-stuff/kohbee.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Amazon}
                        alt="Amazon"
                        width="280"
                        height="170"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                            Amazon | Software Developer  
                        <br/>
                        May 2022 - Current
                    </p>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Job Role <p className="lead text-left">
                                    Working as a Software Developemnet Engineer 1, Orchestration Team.
                                    </p>
                        Tech Stack  <p>
                                    Java, AWS, Docker, TypeScript etc.
                                    </p>
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Wipro}
                        alt="Wipro technologies logo"
                        width="280"
                        height="170"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Wipro Tech. | Project Engineer  
                        <br/>
                        June 2021 - April 2022
                    </p>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Job Role <p className="lead text-left">
                                    Worked on Upgrading and Migrating Various Apllication and Microservices.
                                    </p>
                        Tech Stack  <p>
                                    Java, Spring Boot, JBoss Server, Struts, JSP, Jenkins, Git, Sonar Cube.
                                    </p>
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Kohbee}
                        alt="kohbee logo"
                        width="200"
                        height="170"
                    />
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Kohbee Tech. | Product Development Intern  
                        <br/>
                        May - July 2020
                    </p>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Job Role <p className="lead text-left">
                                        Developed features for Kohbee Teaching Web-App like
                                        Push-Notification,Assessments/Homework Submission,Database Migration
                                        and Android App etc.
                                    </p>
                        Tech Stack  <p>
                                    Flutter, Dart, Firebase.
                                    </p>
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;