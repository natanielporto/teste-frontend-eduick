import React from 'react';
import { ContainerDashboard, ContainerLandingPage } from './styles';

interface IWriteProps {
  text: string;
  origin: string;
}

const Button: React.FC<IWriteProps> = write =>
  write.origin === 'landingPage' ? (
    <ContainerLandingPage>{write.text}</ContainerLandingPage>
  ) : (
    <ContainerDashboard>{write.text}</ContainerDashboard>
  );

export default Button;
