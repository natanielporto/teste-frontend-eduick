import PropTypes from 'prop-types';

import { ContainerDashboard, ContainerLandingPage } from './styles';

interface IWriteProps {
  text: string;
  origin: string;
  handleModalOpen?: () => void;
}

function Button({ origin, text, handleModalOpen }: IWriteProps): JSX.Element {
  if (origin === 'landingPage')
    return (
      <ContainerLandingPage onClick={handleModalOpen}>
        {text}
      </ContainerLandingPage>
    );

  if (origin === 'landingPageSearch')
    return <ContainerLandingPage>{text}</ContainerLandingPage>;

  return <ContainerDashboard>{text}</ContainerDashboard>;
}

Button.defaultProps = {
  handleModalOpen: Function,
};

Button.propTypes = {
  handleModalOpen: PropTypes.func,
};

export default Button;
