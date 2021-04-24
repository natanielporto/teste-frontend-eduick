import styled from 'styled-components';

export const NavBar = styled.div`
  max-width: 1131px;
  margin: auto;

  .landingPage__navBar__mobile {
    margin: 27px 30px;

    img {
      width: 18px;
      height: 12px;
    }

    a img {
      margin: 3px 21px;
      width: 109px;
      height: 18px;
    }
  }

  .landingPage__navBar__desktop {
    margin: 40px 0 142px 0;
    justify-content: space-between;
  }

  div {
    display: flex;
    align-items: center;

    a {
      width: 140px;
    }

    div {
      margin: 0 33px;

      Link {
        text-decoration: none;
        margin: 0 47px;
        color: white;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`;

export const MidSectionLeft = styled.div`
  max-width: 1131px;
  margin: auto;
  position: relative;

  .landingPage__midSectionLeft__image {
    position: absolute;
    right: 595px;
    z-index: 5;
    max-height: 923px;
  }
`;

export const MidSectionRight = styled.div`
  max-width: 1131px;
  position: relative;
  margin: auto;

  .landingPage__midSectionRight {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: bottom;
    height: 628px;
    width: 601px;

    .landingPage__midSectionRight__container {
      position: relative;

      .LandingPage__MidSectionRight__container__firstH2 {
        line-height: 45px;
        font-size: 48px;
      }

      .landingPage__midSectionRight__container__secondH2 {
        font-weight: 700;
        font-size: 48px;
        color: #ffd74f;
      }
    }

    p {
      max-width: 496px;
      line-height: 30px;
      margin: 50px 0;
    }

    input {
      width: 601px;
      height: 56px;
      background: #7955e8;
      border: 1px solid #a68eef;
      color: white;
      padding-left: 28px;

      ::placeholder {
        color: white;
      }
    }

    img {
      position: absolute;
      left: 520px;
      top: -215px;
    }

    div.landingPage__midSectionRight__buttons {
      display: flex;
      margin-top: 30px;
    }
  }
`;

export const Footer = styled.div`
  background-color: #200e64;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 302px;
`;
