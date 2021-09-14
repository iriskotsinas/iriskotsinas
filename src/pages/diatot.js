import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf4 from '../files/diatot_RAPPORT.pdf';

const repoDiatot = 'https://github.com/iriskotsinas/TNM040-diatot';

const item = {
  title: 'Diatot - Communication and User Interfaces',
  description:
    'Group project in the course TNM040 - Communication and User Interfaces created fall 2018. A mobile phone adapted website for diabetics to record the blood sugar and carbohydrate intake to calculate a bolus dose of insulin. Implemented in JavaScript and React.',
  image: 'diatot.png',
  image2: '',
  slug: '/diatot',
  report: Pdf4,
  sourcecode: repoDiatot,
  simulation: '',
  video: '',
};

export default function Diatot() {
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
