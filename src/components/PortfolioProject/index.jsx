import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PortfolioProject = ({ item, isSpecial }) => {
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
      {/* <section> */}
      <Container className="portfolioContainer">
        <div className="projectInfo">
          <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
            <h2 className="sub-title" id="portfolio">
              {item.title}
            </h2>
            <p className="projectText">{item.description}</p>
            <p className="projectText">{item.description2}</p>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <br />
              <p className="hero-cta">
                <span className="links">
                  {item.report ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={item.report}
                    >
                      Report
                    </a>
                  ) : null}
                  {item.report1 ? (
                    <>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report1}
                      >
                        Report lab 1
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report2}
                      >
                        Report lab 2
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report3}
                      >
                        Report lab 3
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report4}
                      >
                        Report lab 4
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report5}
                      >
                        Report lab 5
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={item.report6}
                      >
                        Report lab 6
                      </a>
                    </>
                  ) : null}
                  {item.sourcecode ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={item.sourcecode}
                    >
                      Source code
                    </a>
                  ) : null}
                  {item.video ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={item.video}
                    >
                      Video
                    </a>
                  ) : null}
                  {item.simulation ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn text-color-main"
                      href={item.simulation}
                    >
                      Simulation
                    </a>
                  ) : null}
                </span>
              </p>
              <br />
            </Fade>
          </Fade>
          {isSpecial ? (
            <>
              <img id="fullImg" alt="project" src={item.image} />
              {item.figureText ? <p id="figureText">{item.figureText}</p> : null}
            </>
          ) : (
            <img id="normalImg" alt="project" src={item.image} />
          )}
          {item.image2 ? <img id="normalImg" alt="project" src={item.image2} /> : null}
        </div>
      </Container>
      {/* </section> */}
    </div>
  );
};

PortfolioProject.propTypes = {
  item: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    image: PropTypes.any,
    image2: PropTypes.any,
    slug: PropTypes.string,
    video: PropTypes.any,
    report: PropTypes.any,
    report1: PropTypes.any,
    report2: PropTypes.any,
    report3: PropTypes.any,
    report4: PropTypes.any,
    report5: PropTypes.any,
    report6: PropTypes.any,
    sourcecode: PropTypes.string,
    link: PropTypes.string,
    link2: PropTypes.string,
    simulation: PropTypes.string,
    figureText: PropTypes.string,
  }),
  isSpecial: PropTypes.bool,
};

export default PortfolioProject;
