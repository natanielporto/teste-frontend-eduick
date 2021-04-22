import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import DashboardClassCard from '../../components/DashboardClassCard';
import { Body, NavBarContainer, NavBar, MidSection, Footer } from './styles';

import detail from '../../assets/detail.svg';
import meeting from '../../assets/meeting.svg';
import classImage from '../../assets/classImage.svg';
import logoEduick from '../../assets/logoEduick.svg';
import yellowBubbles from '../../assets/yellowBubbles.svg';
import avatar from '../../assets/avatar.svg';

const Dashboard: React.FC = () => {
  const classes: {
    image: string;
    alt: string;
    stars: number;
    numberOfLessons: number;
    nameOfCourse: string;
  }[] = [
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
    {
      image: classImage,
      alt: 'Students paying attention to class',
      stars: 3,
      numberOfLessons: 10,
      nameOfCourse: 'Master English: Improve Your Speaking',
    },
  ];

  const footerDisclaimerMessage = (
    <p>
      Copyright {new Date().getFullYear()} <strong>Eduick</strong>. Todos os
      direitos reservados.
    </p>
  );

  return (
    <Body>
      <NavBarContainer>
        <NavBar>
          {window.screen.width <= 400 ? (
            <div className="navBar__dashboard__mobile">
              <a href="/">
                <h1>
                  <img src={logoEduick} alt="Eduick Logo" />
                </h1>
              </a>
            </div>
          ) : (
            <div className="navBar__dashboard__desktop">
              <div className="navBar__dashboard__leftContainer">
                <img
                  className="navBar__dashboard__detail"
                  src={detail}
                  alt="Four rows of six dots side by side, all evenly spaced"
                />
                <h1>
                  <a href="/">
                    <img
                      src={logoEduick}
                      alt="Eduick Logo"
                      className="navBar__dashboard__logo"
                    />
                  </a>
                </h1>
                <Link to="classes">My Classes</Link>
              </div>
              <div className="navBar__dashboard__rightContainer">
                <Button origin="Dashboard" text="CHANGE TO TEACHER MODE" />
                <img
                  src={avatar}
                  alt="Student Avatar"
                  className="navBar__dashboard__avatar"
                />
              </div>
            </div>
          )}
        </NavBar>
      </NavBarContainer>
      <MidSection>
        <div className="dashboard__midSection__topContainer">
          <div className="dashboard__midSection__leftImage">
            <img
              src={yellowBubbles}
              alt="Two yellow bubbles, one on top of the other"
            />
          </div>
          <div>
            <h3 className="dashboard__midSection__h3">
              Hello <strong>Student</strong>
              <span className="dashboard__midSection__yellowDot">.</span>
            </h3>
            <p className="dashboard__midSection__p">
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </div>
          <div>
            <img
              src={meeting}
              alt="A draw Three people sitting around a table exchanging student experiences."
            />
          </div>
        </div>

        <section className="dashboard__midSection__cardsSection">
          {classes.map(el => (
            <DashboardClassCard
              image={el.image}
              alt={el.alt}
              stars={el.stars}
              numberOfLessons={el.numberOfLessons}
              nameOfCourse={el.nameOfCourse}
            />
          ))}
        </section>
      </MidSection>
      <Footer>{footerDisclaimerMessage}</Footer>
    </Body>
  );
};

export default Dashboard;
