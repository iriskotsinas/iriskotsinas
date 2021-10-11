import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioProject from '../PortfolioProject';
import ContactSection from '../ContactSection/ContactSection';
import Contact from '../Contact/Contact';
import Pdf3 from '../../files/Game-of-kaken.pdf';
import pdf from '../../files/TNM079___Modeling_And_Animation__Lab_Report_Template.pdf';
import pdf2 from '../../files/TNM079___Modeling_And_Animation__Lab_2.pdf';
import pdf3 from '../../files/TNM079___Modeling_And_Animation__Lab_3.pdf';
import pdf4 from '../../files/TNM079___Modeling_And_Animation__Lab_4.pdf';
import pdf5 from '../../files/TNM079___Modeling_And_Animation__Lab_5.pdf';
import pdf6 from '../../files/TNM079___Modeling_And_Animation__Lab_6.pdf';
import Pdf2 from '../../files/TNCG15__Global_Illumination_and_Rendering.pdf';
import Pdf4 from '../../files/TNM085_Boids_simulation.pdf';

const repoBoids = 'https://github.com/iriskotsinas/TNM085-Boids-simulation';
const websiteBoids = 'http://www.student.itn.liu.se/~jacmo699/MT3/tnm085/boids/';

const repo = 'https://github.com/iriskotsinas/TNM079-modelling-and-animation-labs';
const video3D =
  'https://www.dropbox.com/sh/6gfwx74o3qprbly/AAB5QoLdePnxe37lyDXvcsjra?dl=0&fbclid=IwAR16YNJxDxQcFDKD1AszTn2uh7Kcp6phYfkDirQQ-6hJhkjsgshfND2Dzko&preview=Game_of_Kaken_FINAL_2.0_30.5.2019+copy.mp4';

// This is a summary of my work during the labs in the course Modelling and Animation at Linköping University during the spring of 2021.
const items = [
  {
    title: 'Modelling and Animation',
    description:
      'This is a summary of my work in the course Modelling and Animation at Linköping University during the spring of 2021. The course consisted of six labs covering topics within computer graphics implemented in C++ and OpenGL.',
    description2:
      'The first report studies the half-edge mesh data structure, as well as physical attributes and basic mesh calculations such as curvature, vertex normals, mesh area and mesh volume, among other methods to compute the mesh structure. The second report studies the implementation of decimation of a mesh using the quadric error metric that allowed for multiple analyses of the correctness of newly places vertices when collapsing a specific vertex and the cost of decimating. The third report covers the topic of smooth surfaces and curves in computer graphics, and subdivision curves and surfaces are studied as an approximation thereof. The fourth report covers the implementation of implicit surfaces through a modeling framework called constructive solid geometry (CSG). The fifth report studies level-set methods and the implementation of a level-set framework. The sixth and final report studies the creation of a simulation based on the Navier-Stokes equations in order to simulate fluid.',
    image: 'fluids.png',
    image2: '',
    slug: '/modelling-animation',
    report: '',
    report1: pdf,
    report2: pdf2,
    report3: pdf3,
    report4: pdf4,
    report5: pdf5,
    report6: pdf6,
    sourcecode: repo,
    simulation: '',
    figureText:
      'Images from the fluid simulation in lab six, with output from OpenGL and rendering and raytracing in Blender.',
    isSpecial: true,
  },
  {
    title: 'Boids - Simulation of animal flocking behaviour',
    description:
      'The project, created during spring 2020 in the course TNM085 Modeling Project, is a simulation of animal flocking behaviour, also known as Boids. The simulation was first implemented in MATLAB in 2D, and thereafter in JavaScript with three.js.',
    description2:
      'The project was conducted in collaboration with three project partners, and we worked together every step of the way to ensure that everyone understood the assignment.',
    image: 'boids-simulation.png',
    image2: 'boids-sim.png',
    slug: '/boids',
    report: Pdf4,
    sourcecode: repoBoids,
    simulation: websiteBoids,
    video: '',
    isSpecial: false,
  },
  {
    title: 'Game of Kåken',
    description:
      'Game of Kåken was a group project in the course TNM061 - 3D Computer Graphics, created in spring 2019. The group consisted of six students, and we made a Game of Thrones inspired intro, depicting the building Kåkenhus at Campus Norrköping emerging from the ground. The blueprints of the building was used to create a scalable model, and the 3D-modelling was created in 3DsMax.',
    description2:
      'My contribution to the project was specifically creating the different blocks of the building with realistic heights, as well as adding texture to them. I also created the landscape, water, and light in the scene. Finally, I created the animations and matched them with the music.',
    image: 'kaken1.jpg',
    image2: 'kaken2.jpg',
    slug: '/kaken',
    simulation: '',
    report: Pdf3,
    sourcecode: '',
    video: video3D,
    isSpecial: false,
  },
  {
    title: 'Advanced Global Illumination and Rendering',
    description:
      'In the course TNCG15 - Advanced Global Illumination and Rendering, fall 2020, I created a renderer in C++, together with my project partner. The renderer is a Monte Carlo ray tracer and can handle diffuse and specular objects. Two of the objects have Lambertian reflectors which absorbs the light, and the third object has a perfect reflector that reflects all rays hitting the object. The course also discussed caustics and other rendering methods.',
    image: 'GI-project.png',
    slug: '/globalillumination',
    report: Pdf2,
    sourcecode: '',
    simulation: '',
    isSpecial: false,
  },
];

const PortfolioInfo = () => {
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
    <>
      <section>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
          <h2 className="section-title" id="portfolio">
            Portfolio
          </h2>
          {/* <p id="sub">
            Below I present some of my work created 
          </p> */}
        </Fade>
        {/* <ProjectInfo item={item} /> */}
        {items.map((item) => (
          <PortfolioProject key={item.title} item={item} isSpecial={item.isSpecial} />
        ))}
      </section>
      <ContactSection />
      <Contact />
    </>
  );
};

export default PortfolioInfo;
