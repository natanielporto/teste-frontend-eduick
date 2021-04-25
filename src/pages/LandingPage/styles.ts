import styled from 'styled-components';

interface IisMobile {
  isMobile: boolean;
}
export const NavBar = styled.div<IisMobile>`
  max-width: 1131px;
  margin: auto;

  .landingPage__navBar__mobile {
    display: flex;
    margin-left: 30px;
    margin-top: 20px;

    @media (max-width: 400px) {
      margin-bottom: 50px;
    }

    a img {
      margin: 3px 21px;
      width: 109px;
      height: 18px;
    }
  }

  .landingPage__navBar__desktop {
    margin: 40px 0 142px 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }
  }

  div {
    display: ${({ isMobile }) => (isMobile ? '' : 'flex')};
    align-items: center;

    a {
      width: 140px;
    }

    div {
      margin: ${({ isMobile }) => (isMobile ? '0' : '0 33px')};

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

  @media (max-width: 400px) {
    width: 0px;
  }

  .landingPage__midSectionLeft__image {
    position: absolute;
    right: 595px;
    z-index: 5;
    max-height: 923px;

    @media (max-width: 400px) {
      right: -170px;
      height: 500px;
      top: 400px;
    }
  }
`;

export const MidSectionRight = styled.div`
  max-width: 1131px;
  position: relative;
  margin: auto;

  @media (max-width: 400px) {
    width: 360px;
  }

  .landingPage__midSectionRight {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: bottom;
    height: 628px;
    width: 601px;

    @media (max-width: 400px) {
      width: 336px;
      padding: 0 24px 0 8px;
    }
    .landingPage__midSectionRight__container {
      position: relative;

      .LandingPage__MidSectionRight__container__firstH2 {
        line-height: 45px;
        font-size: 48px;

        @media (max-width: 400px) {
          font-size: 56px;
        }
      }

      .landingPage__midSectionRight__container__secondH2 {
        font-weight: 700;
        font-size: 48px;
        color: #ffd74f;

        @media (max-width: 400px) {
          font-size: 28px;
          margin-bottom: 60px;
        }
      }
    }

    p {
      max-width: 496px;
      line-height: 30px;
      margin: 50px 0;

      @media (max-width: 400px) {
        display: none;
      }
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

      @media (max-width: 400px) {
        padding-left: 12px;
        width: 100%;
      }
    }

    img {
      position: absolute;
      left: 520px;
      top: -215px;

      @media (max-width: 400px) {
        display: none;
      }
    }

    div.landingPage__midSectionRight__buttons {
      display: flex;
      margin-top: 30px;

      @media (max-width: 400px) {
        width: 100%;
      }
    }
  }
`;

export const Footer = styled.div`
  background-color: #200e64;
  width: 100%;
  height: 302px;
  margin-top: 47.5em;

  @media (max-width: 400px) {
    height: 98px;
    margin-top: 53.5em;
  }
`;
