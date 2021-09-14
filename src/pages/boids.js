import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf4 from '../files/TNM085_Boids_simulation.pdf';

const repoBoids = 'https://github.com/iriskotsinas/TNM085-Boids-simulation';
const websiteBoids = 'http://www.student.itn.liu.se/~jacmo699/MT3/tnm085/boids/';

const item = {
  title: 'Boids - Simulation of animal flocking behaviour',
  description:
    'The project, created spring 2020 in the course TNM085 Modeling Project, is a simulation of animal flocking behaviour, also known as Boids. The simulation was first implemented in MATLAB, and thereafter in JavaScript with three.js.',
  image: 'boids-simulation.png',
  image2: 'boids-sim.png',
  slug: '/boids',
  report: Pdf4,
  sourcecode: repoBoids,
  simulation: websiteBoids,
  video: '',
};

export default function Boids() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Kotsinas</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <TopHeader isStartPage={false} />
      <ProjectInfo item={item} />
      <SideBarButton showBelow={70} />
    </>
  );
}
