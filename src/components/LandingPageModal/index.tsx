import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { BsX } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Background,
  BackgroundMobile,
  Container,
  LogoContainer,
} from './styles';
import logoEduick from '../../assets/logoEduick.svg';

import IsMobile from '../../helpers/IsMobile';
import Button from '../Button';

interface IModalProps {
  showModal: boolean;
  handleCloseLandingPageModal: () => void;
}

function LandingPageModal({
  showModal,
  handleCloseLandingPageModal,
}: IModalProps): JSX.Element {
  const isMobile = IsMobile();

  const [closeEye, setCloseEye] = useState(false);

  const [hideMobileMenu, setHideMobileMenu] = useState(false);

  const modalRef = useRef();

  const changeEyeIcon = useCallback(() => {
    setCloseEye(!closeEye);
  }, [closeEye]);

  const closeModal = useCallback(
    e => {
      if (modalRef.current === e.target) handleCloseLandingPageModal();
    },
    [handleCloseLandingPageModal],
  );

  const setMobileMenuGetStarted = useCallback(() => {
    setHideMobileMenu(!hideMobileMenu);
  }, [hideMobileMenu]);

  const keyPress = useCallback(
    event => {
      if (event.key === 'Escape' && showModal) handleCloseLandingPageModal();
    },
    [handleCloseLandingPageModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (isMobile && !hideMobileMenu) {
    return (
      <BackgroundMobile id="a" onClick={closeModal}>
        <div>
          <LogoContainer>
            <img src={logoEduick} alt="Eduick logo" />
            <button
              className="backgroundMobile__logoContainer__closeButton"
              type="button"
              onClick={() => handleCloseLandingPageModal()}
            >
              <BsX size={32} />
            </button>
          </LogoContainer>
        </div>
        <div className="backgroundMobile__linkContainer">
          <div className="backgroundMobile__link">
            <Link to="work">How it works</Link>
          </div>
          <div className="backgroundMobile__link">
            <Link to="about">About us</Link>
          </div>
        </div>
        <div
          className="backgroundMobile__container__loginButton"
          role="button"
          tabIndex={0}
          onClick={() => setMobileMenuGetStarted()}
          onKeyPress={() => setMobileMenuGetStarted()}
        >
          <Button text="GET STARTED" origin="landingPage" />
        </div>
      </BackgroundMobile>
    );
  }

  return (
    <Background onClick={closeModal}>
      <Container>
        <div className="landingPageModal__container__regularTitle">
          Get Started
        </div>
        <div className="landingPageModal__container__boldTitle">JUST LOGIN</div>
        <div className="landingPageModal__container__inputName">
          Username:
          <input type="text" />
        </div>
        <div className="landingPageModal__container__inputName">
          Password:
          <input
            className="landingPageModal__container__inputName__clearIcon"
            type={closeEye ? 'text' : 'password'}
            maxLength={10}
            size={10}
          />
          <div className="landingPageModal__container__eyeIcon">
            <div
              aria-hidden="true"
              onClick={changeEyeIcon}
              onKeyDown={changeEyeIcon}
            >
              {closeEye ? (
                <AiOutlineEyeInvisible size={24} />
              ) : (
                <AiOutlineEye size={24} />
              )}
            </div>
          </div>
        </div>
        <button
          className="background__container__closeButton"
          type="button"
          onClick={() => handleCloseLandingPageModal()}
        >
          <BsX size={32} />
        </button>
        <div className="background__container__loginButton">
          <Link to="/dashboard" id="cypressId">
            <Button text="LOGIN" origin="landingPage" />
          </Link>
        </div>
      </Container>
    </Background>
  );
}

LandingPageModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseLandingPageModal: PropTypes.func.isRequired,
};
export default LandingPageModal;
