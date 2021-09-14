import React from 'react';
import { Link } from 'gatsby';

const Project = (project) => {
  return (
    <Link to={project.item.slug}>
      <div className="projectBox">
        <img alt="project" src={project.item.image} height="330px" />
        <div className="onHover">{project.item.title}</div>
      </div>
    </Link>
  );
};

export default Project;
