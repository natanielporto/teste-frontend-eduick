import styled from 'styled-components';

export const Body = styled.div`
  background-color: #e5e5e5;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  background-color: #7a57fd;
`;

export const NavBar = styled.div`
  max-width: 1140px;
  height: 64px;
  margin: 17px auto;

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
    }

    .navBar__dashboard__logo {
      display: flex;
      margin-right: 48px;
    }

    .navBar__dashboard__rightContainer {
      display: flex;
      align-items: center;

      .navBar__dashboard__avatar {
        margin-left: 28px;
        padding-bottom: 4px;
      }
    }
  }
`;

export const MidSection = styled.div`
  background-color: ##e5e5e5;
  width: 1440px;
  max-height: 1440px;
  width: 100%;
  height: 100%;

  .dashboard__midSection__topContainer {
    max-width: 1140px;
    min-height: 235px;
    background-color: white;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;

    .dashboard__midSection__leftImage {
      position: absolute;
      left: -40px;
    }

    img {
      padding-right: 116px;
      padding-top: 30px;
    }
  }

  .dashboard__midSection__h3 {
    font-size: 21px;
    color: #200e64;
    padding-left: 116px;
    padding-top: 42px;

    .dashboard__midSection__yellowDot {
      font-size: 21px;
      color: yellow;
    }
  }

  .dashboard__midSection__p {
    padding-left: 116px;
    padding-top: 18px;
    max-width: 600px;
    font-size: 14px;
    color: #343434;
  }

  .dashboard__midSection__cardsSection {
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-gap: 0 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Footer = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;

  p {
    color: #000;
  }
`;
