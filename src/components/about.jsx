import React from "react";
import Pdf from "../resume/My Resume.pdf";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5 & CSS3",
          porcentage: "95%",
          value: "90",
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap & TailwindCSS",
          porcentage: "95%",
          value: "90",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "95%",
          value: "95",
        },
        {
          id: "Angular_skill",
          content: "Angular",
          porcentage: "85%",
          value: "85",
        },

        {
          id: "NodeJS_skill",
          content: "NodeJS & ExpressJS",
          porcentage: "90%",
          value: "90",
        },

        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "90%",
          value: "90",
        },
        {
          id: "MySQL_skill",
          content: "MySQL",
          porcentage: "85%",
          value: "85",
        },
        {
          id: "Git_skill",
          content: "Git & Github",
          porcentage: "95%",
          value: "95",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        },
        {
          id: "second-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        },
        {
          id: "third-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div style={{ textAlign: "center" }}></div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <div className="title-box-2">
                        <h5 className="title-left skills">Skills</h5>
                      </div>
                      {/* <p className="title-s">Skill</p> */}
                      {/* {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })} */}
                      <h3>Front-End</h3>
                      <p className="lead">
                        HTML, CSS, JavaScript, Jquery, React JS, React Hooks,
                        Redux Toolkit, Context API, Angular, Vue JS, Three JS,
                        UI/UX design, Bootstrap, TailwindCSS, SCSS, Material
                        UI,...
                      </p>
                      <br></br>
                      <h3>Back-End</h3>
                      <p className="lead">Node Js, Express JS</p>
                      <br></br>
                      <h3>Database</h3>
                      <p className="lead">
                        MySQL, PostgreSQL, MongoDB, Mongoose
                      </p>
                      <br></br>
                      <h3>Other</h3>
                      <p className="lead">
                        Git, Github, Gitlab, Docker, Heroku, Trello
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Experience</h5>
                      </div>

                      <div className="lead">
                        <b>
                          Full-Stack developer - AVEC Association, April 2023 -
                          Present
                        </b>
                        <ul>
                          <li>
                            Designing, planning, and developing fullstack
                            applications tailored to the needs of the
                            association's various international projects
                          </li>

                          <li>
                            React, React hooks, Context API, Bootstrap, MongoDB,
                            Mongoose, NodeJS, ExpressJS, ...
                          </li>
                        </ul>

                        <b>
                          Full-Stack developer - Rumzer Company (USA) Aug 2022 -
                          May 2023
                        </b>
                        <ul>
                          <li>
                            Assisting in enhancing existing software components
                            and adding new features based on business
                            requirements
                          </li>
                          {/* <li>
                            Troubleshooting, debugging and upgrading the
                            software.
                          </li> */}
                          <li>
                            Angular, Ngxs, SASS, Angular Material PostgreSQL,
                            NodeJS, ExpressJS, ...
                          </li>
                        </ul>
                        <b>
                          Full-Stack developer - Freelance Feb 2022 - Jul 2022
                        </b>
                        <ul>
                          <li>Determining client needs and requirements.</li>
                          <li>
                            Node.js, Express, MongoDB, React.js or Angular,
                            HTML, CSS, ...
                          </li>
                        </ul>
                      </div>
                      <div className="lead">
                        <b>Front-End developer - Freelance Aug 2020-Aug 2021</b>
                        <ul>
                          <li>
                            Implementing UI design using HTML, CSS, Bootstrap
                            and TailwindCSS
                          </li>
                          <li>
                            Developping front-end applications using React Js
                          </li>
                          {/* <li>Working on problem Solving using JavaScript </li> */}
                          <li>
                            Designing websites using Adobe XD and Photoshop
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="BtnDownload"
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button button-a button-big button-rounded">
                    <i id="icon" className="fa fa-download"></i>Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
