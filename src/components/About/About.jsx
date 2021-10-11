import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import Image from '../Image/Image';
import Pdf from '../../files/iris-kotsinas-cv-2021-sep.pdf';

const About = () => {
  const img = 'IMG_0034.png';

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const resume = 'resume';

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
    <section id="about">
      <Container className="about-container">
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={5} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Image alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={7} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  My name is Iris Kotsinas and I am a 23-year old Master of Science student in Media
                  Technology and Engineering, graduating in June 2022 from Linköping University.
                </p>
                <p className="about-wrapper__info-text">
                  I am an ambitious student who likes to stay busy. I am currently a Software
                  Developer at We Know IT, a student-run IT-consultancy firm. I have previously been
                  active in several extracurricular activities and I also enjoy working as a
                  laboratory assistant in various courses. I love sports, especially lacrosse, and I
                  played in the Swedish women’s national lacrosse team at the European Championship
                  2019 in Netanya, Israel.
                </p>
                <p className="about-wrapper__info-text">
                  I have previously worked as a software engineer intern at both Axis Communications
                  and Upsales. At Axis I got the opportunity to develop a new software for their
                  surveillance cameras, and at Upsales I further developed their booking system Easy
                  Booking. It was an exciting learning experience and made me more eager to pursue
                  my interest for software development.
                </p>
                <p className="about-wrapper__info-text">
                  I have always loved movies and movie soundtracks, and the possibility to work with
                  film creation was my main motivation for applying to Media Technology. I therefore
                  strive to apply and develop my skills within computer graphics, and I am always
                  open for new opportunities and challenges, especially within the VFX-industry.
                </p>
                <p className="about-wrapper__info-text">
                  My resume is linked below if you are interested in finding out more about me.
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={Pdf}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container className="chevron-btn">
        <div className="chevron-down-about">
          <Link to="projectsection" smooth duration={1000}>
            <Icon path={mdiChevronDown} size={2} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
