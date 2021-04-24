import styled from 'styled-components';

interface IisMobile {
  isMobile: boolean;
}

export const Background = styled.div<IisMobile>`
  justify-content: center;
  background-color: rgba(32, 14, 100, 0.8);
  width: 99.4vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  background-color: #6a40e4;
  min-width: 525px;
  min-height: 479px;
  position: relative;
  transition: opacity 0.2s ease-in-out;
  padding-top: 40px;
  padding-left: 40px;
  border-radius: 4px;

  .landingPageModal__container__regularTitle {
    font-size: 34px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }

  .landingPageModal__container__boldTitle {
    font-size: 38px;
    color: #ffd74f;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 32px;
  }

  .background__container__closeButton {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -25px;
    right: -25px;
    background-color: #200e64;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    color: #fff;
  }

  .landingPageModal__container__inputName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 40px;

    + div {
      margin-top: 16px;
    }

    input {
      margin-top: 5px;
      width: 100%;
      height: 56px;
      background-color: rgba(255, 255, 255, 0.4);
      border: 1px solid #fff;
      border-radius: 4px;
      color: white;
      padding-left: 28px;

      ::placeholder {
        color: white;
      }
    }

    .landingPageModal__container__eyeIcon {
      position: absolute;
      top: 310px;
      right: 30px;
      opacity: 80%;
    }
  }

  .background__container__loginButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 27px;
    padding-right: 65px;
  }
`;
