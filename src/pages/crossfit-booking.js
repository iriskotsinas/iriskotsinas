import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';

const item = {
  title: 'Advanced Web Programming',
  description:
    'A project made in the course TDDD27 Advanced Web Programming. My project partner and I created a CrossFit booking system. The frontend was developed with Vue, VueX and SCSS, and the backend in TypeScript with Node.js, Express and MongoDB. Login functionality was developed for both ordinary members as well as administrators. The administrators can add and remove new sessions and study the members signed up. The ordinary members can browse through the selection of sessions and sign up to them.',
  image: 'crossfit.png',
  image2: 'crossfit2.png',
  slug: '/crossfit-booking',
  report: '',
  sourcecode: 'https://github.com/iriskotsinas/TDDD27-CrossFit-BookingSystem',
  simulation: '',
  video: '',
};

export default function CrossFitBooking() {
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
