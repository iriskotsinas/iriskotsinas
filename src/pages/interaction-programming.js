import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';

const repoCreditCard = 'https://github.com/iriskotsinas/TDDC73-Interaction-Programming';

const item = {
  title: 'Interaction Programming',
  description:
    'A simple credit card component was implemented for a lab in the course TDDC73 Interaction Programming. The user can type their credit card credentials and it will appear on the image of the credit card. When the CVV-field is pressed, the card will flip and display the back. Depending on which number the card number starts with, the logo will change to the accurate credit card network. I used React Native as framework and implemented the code in TypeScript. The application was created for Android.',
  image: 'creditcard.png',
  slug: '/interaction-programming',
  report: '',
  sourcecode: repoCreditCard,
  simulation: '',
  description2: '',
};

export default function InteractionProgramming() {
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
