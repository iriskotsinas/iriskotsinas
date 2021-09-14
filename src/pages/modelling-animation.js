import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import pdf from '../files/TNM079___Modeling_And_Animation__Lab_Report_Template.pdf';
import pdf2 from '../files/TNM079___Modeling_And_Animation__Lab_2.pdf';
import pdf3 from '../files/TNM079___Modeling_And_Animation__Lab_3.pdf';
import pdf4 from '../files/TNM079___Modeling_And_Animation__Lab_4.pdf';
import pdf6 from '../files/TNM079___Modeling_And_Animation__Lab_6.pdf';

const repo = 'https://github.com/iriskotsinas/TNM079-modelling-and-animation-labs';

// This is a summary of my work during the labs in the course Modelling and Animation at Linköping University during the spring of 2021.
const item = {
  title: 'Modelling and Animation',
  description:
    'The course TNM079 Modelling and Animation consisted of 6 labs covering topics within computer graphics implemented in C++ and OpenGL.',
  image: 'fluids.png',
  image2: '',
  slug: '/modelling-animation',
  report: '',
  report1: pdf,
  report2: pdf2,
  report3: pdf3,
  report4: pdf4,
  report6: pdf6,
  sourcecode: repo,
  simulation: '',
  figureText:
    'Images from the fluid simulation in lab six, with output from OpenGL and rendering and raytracing in Blender.',
};

export default function ModellingAnimation() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Kotsinas</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <TopHeader isStartPage={false} />
      <ProjectInfo item={item} isSpecial />
      <SideBarButton showBelow={70} />
    </>
  );
}
