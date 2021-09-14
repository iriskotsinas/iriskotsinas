import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import ContactSection from '../ContactSection/ContactSection';
import Contact from '../Contact/Contact';

const ProjectInfo = (project) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div>
      <section>
        <Container className="projectContainer">
          <div className="projectInfo">
            <Link to="/work">
              <p className="back">Go back</p>
            </Link>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
              <h2 className="section-title" id="portfolio">
                {project.item.title}
              </h2>
              <p className="projectText">{project.item.description}</p>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <br />
                <p className="hero-cta">
                  <span className="links">
                    {project.item.report ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={project.item.report}
                      >
                        Report
                      </a>
                    ) : null}
                    {project.item.report1 ? (
                      <>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.item.report1}
                        >
                          Report lab 1
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.item.report2}
                        >
                          Report lab 2
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.item.report3}
                        >
                          Report lab 3
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.item.report4}
                        >
                          Report lab 4
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.item.report6}
                        >
                          Report lab 6
                        </a>
                      </>
                    ) : null}
                    {project.item.sourcecode ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={project.item.sourcecode}
                      >
                        Source code
                      </a>
                    ) : null}
                    {project.item.video ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={project.item.video}
                      >
                        Video
                      </a>
                    ) : null}
                    {project.item.simulation ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={project.item.simulation}
                      >
                        Simulation
                      </a>
                    ) : null}
                  </span>
                </p>
                <br />
              </Fade>
            </Fade>
            {project.isSpecial ? (
              <>
                <img id="fullImg" alt="project" src={project.item.image} />
                {project.item.figureText ? <p id="figureText">{project.item.figureText}</p> : null}
              </>
            ) : (
              <img id="normalImg" alt="project" src={project.item.image} />
            )}
            {project.item.image2 ? (
              <img id="normalImg" alt="project" src={project.item.image2} />
            ) : null}
          </div>
        </Container>
      </section>
      <ContactSection />
      <Contact />
    </div>
  );
};

export default ProjectInfo;
