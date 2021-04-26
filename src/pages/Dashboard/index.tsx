import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  IoChevronUp,
  IoChevronDown,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import IsMobile from '../../helpers/IsMobile';
import Button from '../../components/Button';
import DashboardClassCard from '../../components/DashboardClassCard';
import {
  Body,
  NavBarContainer,
  NavBar,
  MidSection,
  NumberOfPages,
  TeacherModeModal,
  TeacherModeModalTextBox,
  Footer,
} from './styles';

import detail from '../../assets/detail.svg';
import meeting from '../../assets/meeting.svg';
import classImage from '../../assets/classImage.svg';
import logoEduick from '../../assets/logoEduick.svg';
import yellowBubbles from '../../assets/yellowBubbles.svg';
import avatar from '../../assets/avatar.svg';

const Dashboard: React.FC = () => {
  const [teacherModal, setTeacherModal] = useState(false);

  const changeToTeacherMode = useCallback(() => {
    setTeacherModal(!teacherModal);
  }, [teacherModal]);

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
  ];

  const isMobile = IsMobile();

  const footerDisclaimerMessage = isMobile ? (
    <p>
      Copyright &#169; {new Date().getFullYear()} <strong>Eduick</strong>.
    </p>
  ) : (
    <p>
      Copyright &#169; {new Date().getFullYear()} <strong>Eduick</strong>. Todos
      os direitos reservados.
    </p>
  );

  return (
    <Body>
      <NavBarContainer>
        <NavBar>
          {isMobile ? (
            <div className="navBar__dashboard__mobile">
              <a href="/">
                <h1>
                  <img src={logoEduick} alt="Eduick Logo" />
                </h1>
              </a>
              <div className="navBar__dashboard__mobileRightContainer">
                <button type="button" onClick={() => changeToTeacherMode()}>
                  {teacherModal ? (
                    <IoChevronUp size={24} color="#2E3A59" />
                  ) : (
                    <IoChevronDown size={24} color="#2E3A59" />
                  )}
                </button>
                <img
                  src={avatar}
                  alt="Student Avatar"
                  className="navBar__dashboard__avatar"
                />
              </div>
              {teacherModal && (
                <>
                  <TeacherModeModal />
                  <TeacherModeModalTextBox>
                    <span>CHANGE TO TEACHER MODE</span>
                    <span>
                      <IoArrowForwardOutline size={18} color="#2E3A59" />
                    </span>
                  </TeacherModeModalTextBox>
                </>
              )}
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
                  className="navBar__dashboard__avatar"
                  src={avatar}
                  alt="Student Avatar"
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
              className="dashboard__midSection__rightImage"
              src={meeting}
              alt="A draw Three people sitting around a table exchanging student experiences."
            />
          </div>
        </div>
        <section className="dashboard__midSection__cardsSection">
          {classes.map(el => (
            <DashboardClassCard
              key={Math.random() * 10000}
              image={el.image}
              alt={el.alt}
              stars={el.stars}
              numberOfLessons={el.numberOfLessons}
              nameOfCourse={el.nameOfCourse}
            />
          ))}
        </section>
        <div className="dashboard__midSection__pageCounterContainer">
          <div className="dashboard__midSection__pageCounter">
            <NumberOfPages />
            <NumberOfPages />
            <NumberOfPages />
          </div>
        </div>
      </MidSection>
      <Footer>{footerDisclaimerMessage}</Footer>
    </Body>
  );
};

export default Dashboard;
