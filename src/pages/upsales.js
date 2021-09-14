import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';

const item = {
  title: 'Summer Internship at Upsales Nordic',
  description:
    'I worked as a system developer intern at Upsales Nordic, summer 2021. I further developed their booking system Easy Booking, and worked fullstack with focus on the backend. The application was developed with React, Node.js and MySQL, mainly in TypeScript.',
  image: 'upsales.jpeg',
  slug: '/upsales',
  report: '',
  sourcecode: '',
  simulation: '',
};

export default function Upsales() {
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
