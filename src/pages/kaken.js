import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf3 from '../files/Game-of-kaken.pdf';

const video3D =
  'https://www.dropbox.com/sh/6gfwx74o3qprbly/AAB5QoLdePnxe37lyDXvcsjra?dl=0&fbclid=IwAR16YNJxDxQcFDKD1AszTn2uh7Kcp6phYfkDirQQ-6hJhkjsgshfND2Dzko&preview=Game_of_Kaken_FINAL_2.0_30.5.2019+copy.mp4';

const item = {
  title: 'Game of Kåken',
  description:
    'Game of Kåken was a group project in the course TNM061 - 3D Computer Graphics, created in spring 2019. The group consisted of six students, and we made a Game of Thrones inspired intro, depicting the building Kåkenhus at Campus Norrköping emerging from the ground. The blueprints of the building was used to create a scalable model, and the 3D-modelling was created in 3DsMax.',
  description2:
    'My contribution to the project was specifically creating the different blocks of the building with realistic heights, as well as adding texture to them. I also created the landscape, water, and light in the scene. Finally, I created the animations and matched them with the music.',
  image: 'kaken1.jpg',
  image2: 'kaken2.jpg',
  slug: '/kaken',
  simulation: '',
  report: Pdf3,
  sourcecode: '',
  video: video3D,
  isSpecial: false,
};

export default function Kaken() {
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
