import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf from '../files/TNM094_slutrapport.pdf';

const repo = 'https://github.com/iriskotsinas/DomeDagen';

const item = {
  title: 'Domesday - B.Sc. project Linköping University',
  description:
    'The project, created spring 2020, resulted in a multiplayer game for 50 to 100 players where each player connects to the game through a mobile phone device. Each character is a diver whos mission is to gather plastics in an ocean where the environment is designed to best grasp the format of the dome screen. The game was developed using C++ and OpenGL, and communication was handled with node.js and websockets. The internal projection in the dome theater was handled by the tool SGCT that was provided by Linköping University. The game was designed as entertainment before the actual dome screen showing at Visualiseringscenter C in Norrköping.',
  image: 'diver.png',
  image2: 'domen.jpg',
  slug: '/domesday',
  report: Pdf,
  simulation: '',
  sourcecode: repo,
  description2: '',
};

export default function Domesday() {
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
