import styled from 'styled-components';

export const ContainerLandingPage = styled.button`
  border: 0;
  width: 165px;
  height: 56px;
  border-radius: 4px;
  background-color: #ffd74f;
  font-size: 14px;
  color: rgba(122, 87, 253, 1);
  font-weight: 700;
  z-index: 2;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ContainerDashboard = styled.button`
  border: 0;
  width: 186px;
  height: 34px;
  border-radius: 4px;
  background-color: rgba(32, 14, 100, 0.3);
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  z-index: 2;
`;
