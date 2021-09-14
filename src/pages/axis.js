import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';

const item = {
  title: 'Summer internship at Axis Communications',
  description:
    'Summer 2020, I worked as a software engineer intern at Axis Communications and got the opportunity to develop a new software for Axis surveillance cameras. I worked with both back end and front end development, mainly in TypeScript. I got a chance to design a full scale system, write tests for the application as well as design a user interface from scratch. It was an exciting learning experience and made me more eager to pursue my interest for software development. The software was implemented using TypeScript, Next.js, mongoose, Docker, Jest, CircleCI and more.',
  image: 'axis.jpg',
  slug: '/axis',
  report: '',
  sourcecode: '',
  simulation: '',
};

export default function Axis() {
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
