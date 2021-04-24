import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Background, Container } from './styles';
import Button from '../Button';

interface IModalProps {
  showModal: boolean;
  screenWidth: number;
  handleCloseLandingPageModal: () => void;
}

const LandingPageModal: React.FC<IModalProps> = ({
  showModal,
  screenWidth,
  handleCloseLandingPageModal,
}) => {
  const isMobile = screenWidth <= 400;

  const [closeEye, setCloseEye] = useState(false);

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

  return (
    <>
      <Background onClick={closeModal} isMobile={isMobile}>
        <Container style={{ display: 'block' }}>
          <div className="landingPageModal__container__regularTitle">
            Get Started
          </div>
          <div className="landingPageModal__container__boldTitle">
            JUST LOGIN
          </div>
          <div className="landingPageModal__container__inputName">
            Username:
            <input type="text" />
          </div>
          <div className="landingPageModal__container__inputName">
            Password:
            <input type="text" />
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
            aria-label="Close Modal"
            onClick={() => handleCloseLandingPageModal()}
          >
            <BsX size={32} />
          </button>
          <div className="background__container__loginButton">
            <Link to="/dashboard">
              <Button text="LOGIN" origin="landingPage" />
            </Link>
          </div>
        </Container>
      </Background>
    </>
  );
};

LandingPageModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
  handleCloseLandingPageModal: PropTypes.func.isRequired,
};
export default LandingPageModal;
