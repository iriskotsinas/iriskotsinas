import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf4 from '../files/TNM100___UPG2.pdf';

const item = {
  title: 'Structural Methods for User Experience (UX)',
  description:
    'Project in the course TNM100 Structural Methods for User Experience (UX), spring 2021. We created a prototype for a wellness app, in which a user can track their activity levels and goals. We used Figma for the creation of the prototype.',
  image: 'bla_prick.png',
  image2: 'steg.png',
  slug: '/ux-project',
  report: Pdf4,
  sourcecode: '',
  simulation: '',
  description2: '',
};

export default function UXProject() {
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
