import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';

const ProjectSection = () => {
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
    <section id="projectsection">
      <Container>
        {/* <Title title="Projects" /> */}
        <Row className="projects-wrapper">
          <Fade left={isDesktop} bottom={isMobile} duration={500} delay={0} distance="30px">
            <div className="projects-wrapper__info">
              <span className="d-flex mt-3">
                <Link to="/work" className="cta-btn cta-btn--resume">
                  View my portfolio
                </Link>
              </span>
            </div>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
