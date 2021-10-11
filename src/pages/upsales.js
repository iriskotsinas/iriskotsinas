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
    'I worked as a system developer intern at Upsales Nordic, summer 2021. I further developed their booking system Easy Booking, and worked fullstack with focus on the backend. The application was developed with React, Node.js and MySQL, mainly in TypeScript. The new booking system has launched and can be studied via the links below.',
  image: 'upsales.jpeg',
  description2: '',
  slug: '/upsales',
  report: '',
  sourcecode: '',
  simulation: '',
  link: 'https://support.upsales.com/hc/en-us/articles/4405927096465-Easy-Booking-Pro',
  link2: 'https://support.upsales.com/hc/en-us/articles/4405602552209',
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
