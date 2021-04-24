import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import LandingPageRadioButtons from '../../components/LandingPageRadioButtons';
import LandingPageModal from '../../components/LandingPageModal';
import { NavBar, MidSectionLeft, MidSectionRight, Footer } from './styles';

import logoEduick from '../../assets/logoEduick.svg';
import hamburguer from '../../assets/hamburguer.svg';
import student from '../../assets/student.svg';
import rightLandingPageEffect from '../../assets/rightLandingPageEffect.svg';

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const { width } = window.screen;
    setScreenWidth(width);
  }, []);

  return (
    <>
      <NavBar>
        {screenWidth <= 400 ? (
          <div className="landingPage__navBar__mobile">
            <img src={hamburguer} alt="Options menu" />
            <a href="/">
              <h1>
                <img src={logoEduick} alt="Eduick Logo" />
              </h1>
            </a>
          </div>
        ) : (
          <div className="landingPage__navBar__desktop">
            <div>
              <a href="/">
                <h1>
                  <img src={logoEduick} alt="Eduick Logo" />
                </h1>
              </a>
              <div>
                <Link to="work">How it works</Link>
                <Link to="about">About us</Link>
              </div>
            </div>
            <Button
              origin="landingPage"
              text="Get Started"
              handleModalOpen={handleModalOpen}
            />
          </div>
        )}
        {showModal && (
          <LandingPageModal
            screenWidth={screenWidth}
            showModal={showModal}
            handleCloseLandingPageModal={() => setShowModal(false)}
          />
        )}
      </NavBar>
      <MidSectionLeft>
        <section className="landingPage__midSectionLeft">
          <img
            className="landingPage__midSectionLeft__image"
            src={student}
            alt="Student writing on a note book"
          />
        </section>
      </MidSectionLeft>
      <MidSectionRight>
        <section className="landingPage__midSectionRight">
          <div className="landingPage__midSectionRight__container">
            <h2 className="landingPage__midSectionRight__container__firstH2">
              Find your
            </h2>
            <h2 className="landingPage__midSectionRight__container__secondH2">
              BEST TEACHER
            </h2>
            <p>
              Whether you are a student trying to find your ideal private
              language teachers/tutors or a teacher trying to find great
              students for your customised private lessons!
            </p>
            <input
              type="text"
              placeholder="Type here what are you looking for"
            />
          </div>
          <img
            src={rightLandingPageEffect}
            alt="Shape to create a faded effect."
          />
          <div className="landingPage__midSectionRight__buttons">
            <LandingPageRadioButtons />
          </div>
        </section>
      </MidSectionRight>
      <Footer />
    </>
  );
};

export default LandingPage;
