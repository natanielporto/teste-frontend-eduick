import styled from 'styled-components';

export const Body = styled.div`
  background-color: #e5e5e5;
  padding-bottom: 1px;

  @media (max-width: 400px) {
    width: 100vw;
  }
`;

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: #7a57fd;
  position: relative;

  @media (max-width: 400px) {
    width: 100vw;
    padding: 0 24px 0px 12px;
  }
`;

export const NavBar = styled.div`
  max-width: 1140px;
  height: 64px;
  margin: 17px auto;

  .navBar__dashboard__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navBar__dashboard__mobileRightContainer {
      display: flex;
      align-items: center;
    }

    button {
      background-color: transparent;
      border: none;

      & :focus {
        outline: none;
      }
    }

    img {
      padding-bottom: 5px;
      margin-left: 10px;
    }

    .navBar__dashboard__avatar {
      @media (max-width: 400px) {
        width: 45px;
      }
    }
  }
  .navBar__dashboard__desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navBar__dashboard__leftContainer {
      display: flex;
      align-items: center;
    }

    .navBar__dashboard__detail {
      margin-right: 22px;

      @media (max-width: 400px) {
        display: none;
      }
    }

    .navBar__dashboard__logo {
      display: flex;
      margin-right: 48px;
    }

    .navBar__dashboard__rightContainer {
      display: flex;
      align-items: center;
    }

    .navBar__dashboard__avatar {
      margin-left: 28px;
      padding-bottom: 4px;
    }
  }
`;

export const MidSection = styled.div`
  width: 100%;

  @media (max-width: 400px) {
    padding: 20px;
    border-radius: 4px;
  }

  .dashboard__midSection__topContainer {
    max-width: 1140px;
    min-height: 235px;
    background-color: white;
    margin: auto;
    display: flex;
    position: relative;

    @media (max-width: 400px) {
      width: 100%;
    }

    .dashboard__midSection__leftImage {
      position: absolute;
      left: -40px;
      padding-top: 30px;

      @media (max-width: 400px) {
        left: 190px;
        padding-top: 0;
        top: -35px;
        transform: scale(0.7);
      }
    }
  }

  .dashboard__midSection__h3 {
    font-size: 21px;
    color: #200e64;
    padding-left: 116px;
    padding-top: 42px;

    @media (max-width: 400px) {
      padding-left: 21px;
      padding-top: 20px;
      font-size: 24px;
    }

    .dashboard__midSection__yellowDot {
      font-size: 36px;
      color: #ffd74f;
    }
  }

  .dashboard__midSection__p {
    padding-left: 116px;
    padding-top: 18px;
    max-width: 600px;
    font-size: 14px;
    color: #343434;

    @media (max-width: 400px) {
      padding: 26px 20px;
      line-height: 22px;
      max-width: 295px;
      font-size: 16px;
    }
  }

  .dashboard__midSection__rightImage {
    padding-top: 30px;

    @media (max-width: 400px) {
      display: none;
    }
  }

  .dashboard__midSection__cardsSection {
    max-width: 1140px;
    min-height: 700px;
    margin: auto;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  div.dashboard__midSection__pageCounterContainer {
    width: 100%;
    margin: auto;
  }

  div.dashboard__midSection__pageCounter {
    display: flex;
    justify-content: center;
    margin: 35px auto 75px auto;

    @media (max-width: 400px) {
      visibility: hidden;
      margin: 35px auto 10px auto;
    }
  }
`;

export const NumberOfPages = styled.div`
  background-color: #7a57fd;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin: 5px;
  margin-bottom: 5 0px;
`;

export const Footer = styled.div`
  background-color: #fff;
  color: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;

  @media (max-width: 400px) {
    width: 100vw;
  }
`;

export const TeacherModeModal = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  opacity: 80%;
  top: 105%;
  left: 0;
  background-color: #fff;
  z-index: 2;
`;

export const TeacherModeModalTextBox = styled.div`
  position: absolute;
  color: #7a57fd;
  background-color: #fff;
  left: 0;
  width: 100%;
  height: 58px;
  padding: 28px;
  top: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  z-index: 3;

  span + span {
    opacity: 50%;
  }
`;
