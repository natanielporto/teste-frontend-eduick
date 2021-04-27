import styled from 'styled-components';

export const BackgroundMobile = styled.div`
  background-color: #200e64;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  top: -20px;

  .backgroundMobile__link {
    display: flex;
    flex-flow: column-reverse;
    text-align-last: center;
    margin: 15px;
    font-size: 21px;
  }

  .backgroundMobile__linkContainer {
    margin: 202px 0 59px 0;
  }
  .backgroundMobile__container__loginButton {
    margin: 24px;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button,
  .backgroundMobile__logoContainer__closeButton {
    display: flex;
    align-items: center;
    color: white;
    background-color: transparent;
    border: none;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(32, 14, 100, 0.8);
  color: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  top: -40px;
  left: 0;

  @media (max-width: 400px) {
    top: -20px;
  }
`;

export const Container = styled.div`
  background-color: #6a40e4;
  color: #fff;
  min-width: 525px;
  min-height: 479px;
  position: relative;
  transition: opacity 0.2s ease-in-out;
  padding-top: 40px;
  padding-left: 40px;
  border-radius: 4px;

  @media (max-width: 400px) {
    min-width: 101%;
    min-height: 102%;
    padding-left: 25px;
    padding-top: 24px;
    left: -40px;
  }

  .landingPageModal__container__regularTitle {
    font-size: 34px;
    color: #fff;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 400px) {
      font-size: 28px;
      line-height: 33px;
    }
  }

  .landingPageModal__container__boldTitle {
    font-size: 38px;
    color: #ffd74f;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 32px;

    @media (max-width: 400px) {
      font-size: 32px;
      line-height: 37px;
      margin-bottom: 37px;
    }
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

    @media (max-width: 400px) {
      background-color: transparent;
      top: 12px;
      right: 8px;
    }
  }

  .landingPageModal__container__inputName {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 40px;

    @media (max-width: 400px) {
      padding-right: 25px;
    }

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
      color: #fff;
      padding-left: 28px;

      ::placeholder {
        color: #fff;
      }
    }

    .landingPageModal__container__eyeIcon {
      position: absolute;
      top: 310px;
      right: 70px; //This is to get the eye toggle away from auto-complete browser extentions, like Last Pass. Or else both icons would be on top of the other.
      opacity: 80%;

      @media (max-width: 400px) {
        top: 272px;
        right: 50px;
      }
    }
  }

  .background__container__loginButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 27px;
    padding-right: 65px;

    @media (max-width: 400px) {
      display: inline-block;
      width: 100%;
      margin-top: 24px;
      padding-right: 25px;
    }
  }
`;
