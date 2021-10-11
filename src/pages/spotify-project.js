import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf5 from '../files/finalspotify.pdf';

const spotifyRepo = 'https://github.com/iriskotsinas/TNM108-spotify-project';

const item = {
  title: 'Machine Learning for Social Media project',
  description:
    'Project in the course TNM108 Machine Learning for Social Media. We created a program to classify christmas songs. We used the Spotify Web API and Spotipy to collect playlist data. The test and training data consisted of christmas songs and songs of different genres. Three different machine learning models were used and compared, Decision Tree Classifier, K-Nearest Neighbor Classifier and Random Forest Classifier. We used the Spotify Web API and Spotipy. The project was implemented in Python.',
  image: 'spotify.png',
  slug: '/spotify-project',
  report: Pdf5,
  sourcecode: spotifyRepo,
  simulation: '',
  description2: '',
};

export default function SpotifyProject() {
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
