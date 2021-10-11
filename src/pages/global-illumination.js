import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf2 from '../files/TNCG15__Global_Illumination_and_Rendering.pdf';

const item = {
  title: 'Advanced Global Illumination and Rendering',
  description:
    'In the course TNCG15 - Advanced Global Illumination and Rendering, fall 2020, I created a renderer in C++, together with my project partner. The renderer is a Monte Carlo ray tracer and can handle diffuse and specular objects. Two of the objects have Lambertian reflectors which absorbs the light, and the third object has a perfect reflector that reflects all rays hitting the object. The course also discussed caustics and other rendering methods.',
  description2: '',
  image: 'GI-project.png',
  slug: '/globalillumination',
  report: Pdf2,
  sourcecode: '',
  simulation: '',
  isSpecial: false,
};

export default function GlobalIllumination() {
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
