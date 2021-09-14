import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import SideBarButton from '../components/SideBarButton/SideBarButton';
import TopHeader from '../components/TopHeader/TopHeader';
import ProjectInfo from '../components/ProjectInfo';
import Pdf2 from '../files/Information_Visualization.pdf';

const repo = 'https://github.com/iriskotsinas/TNM048-Information-Visualization';

const item = {
  title: 'Information Visualization',
  description:
    'Project in the course TNM048 Information Visualization, spring 2021. Information visualization can be used to visually represent data, enabling a user to better understand it. Common examples of such visualizations are choropleth maps and scatter plots. With the use of those visualization methods we created a web-based application visualizing world happiness. The framework used for the development of the application was React and the D3.js library was used to load and display the data.',
  image: 'infovis2.png',
  slug: '/infovis',
  report: Pdf2,
  sourcecode: repo,
  simulation: '',
};

export default function InfoVis() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Iris Kotsinas</title>
        <html lang="en" />
        <meta name="description" content="Iris Portfolio" />
      </Helmet>
      <TopHeader isStartPage={false} />
      <ProjectInfo item={item} isSpecial />
      <SideBarButton showBelow={70} />
    </>
  );
}
