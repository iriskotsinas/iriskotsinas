import React from 'react';
import { Link } from 'gatsby';
import { Link as ReactLink } from 'react-scroll';

const TopHeader = (isStartPage) => {
  return (
    <section id="topHeader">
      <div className="topHeader">
        <Link id="headerLink" to="/">
          Home
        </Link>
        {isStartPage.isStartPage ? (
          <ReactLink id="headerLink" to="about" smooth duration={1000}>
            About me
          </ReactLink>
        ) : (
          <Link id="headerLink" to="/#about">
            About me
          </Link>
        )}
        <Link id="headerLink" to="/work">
          Portfolio
        </Link>
        <ReactLink id="headerLink" to="contact" smooth duration={1000}>
          Contact
        </ReactLink>
      </div>
    </section>
  );
};

export default TopHeader;
