import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import AllProjects from '../components/AllProjects/AllProjects';
import ContactSection from '../components/ContactSection/ContactSection';
import Contact from '../components/Contact/Contact';

export default function Work() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Kotsinas</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <TopHeader isStartPage={false} />
      <AllProjects />
      <ContactSection />
      <Contact />
      <SideBarButton showBelow={70} />
    </>
  );
}
