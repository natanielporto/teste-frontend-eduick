import React from 'react';
import PropTypes from 'prop-types';

import { ContainerDashboard, ContainerLandingPage } from './styles';

interface IWriteProps {
  text: string;
  origin: string;
  handleModalOpen?: () => void;
}

const Button: React.FC<IWriteProps> = ({
  origin,
  text,
  handleModalOpen,
}: IWriteProps) => {
  return origin === 'landingPage' ? (
    <ContainerLandingPage onClick={handleModalOpen}>
      {text}
    </ContainerLandingPage>
  ) : (
    <ContainerDashboard>{text}</ContainerDashboard>
  );
};

Button.defaultProps = {
  handleModalOpen: Function,
};

Button.propTypes = {
  handleModalOpen: PropTypes.func,
};

export default Button;
