import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  width: 360px;
  height: 323px;
  color: #000;
  margin-top: 30px;

  img {
    padding: 12px 12px 18px 12px;
  }

  .container__middleSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 14px 16px 14px;
  }

  .container__goldStar {
    color: gold;
    margin-right: 5px;
  }

  .container__grayStar {
    color: lightgray;
    margin-right: 5px;
  }

  .container__middleSection__lessonsNumber {
    background-color: #cfc9e9;
    padding: 10px;
    font-size: 10px;
    font-weight: 600;
    opacity: 0.6;
    border-radius: 4px;
  }

  div.container__bottomSection__className {
    color: #200e64;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding-left: 12px;
  }
`;

export default Container;
