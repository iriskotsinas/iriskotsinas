import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';

const item = {
  title: 'Cleanpipe website - We Know IT',
  description:
    "As a software engineer at the student run IT-consultancy firm We Know IT I played a major part in developing Cleanpipe's new website during the spring 2021, which will soon launch. The website was developed with Strapi.js and Next.js in Typescript.",
  image: 'Cleanpipe.png',
  slug: '/cleanpipe',
  report: '',
  sourcecode: '',
  simulation: '',
  video: '',
  description2: '',
};

export default function Cleanpipe() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Kotsinas</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <TopHeader isStartPage={false} />
      <ProjectInfo item={item} isSpecial={false} />
      <SideBarButton showBelow={70} />
    </>
  );
}
