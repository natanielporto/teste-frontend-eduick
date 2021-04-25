import styled from 'styled-components';

interface IChecked {
  checked: boolean;
}

export const ContainerRoleSelector = styled.div`
  display: flex;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
  }

  div {
    display: flex;
    margin-right: 70px;

    @media (max-width: 400px) {
      width: 100%;
      margin-bottom: 16px;
      justify-content: flex-end;
    }
  }
`;

export const RadioButton = styled.button<IChecked>`
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 162px;
  height: 56px;
  border: 1px solid #a68eef;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ checked }) => (checked ? '#fff' : '#ccc')};
  background-color: ${({ checked }) =>
    checked ? '#7955e8' : 'rgba(121, 85, 232, 0.3)'};

  @media (max-width: 400px) {
    margin-right: 12px;
    margin-top: -15px;
    width: 160px;
    height: 48px;
    font-size: 12px;
  }

  &:last-child {
    @media (max-width: 400px) {
      margin-right: 0;
    }
  }

  & label {
    cursor: pointer;
    transition: all 0.25s linear;

    &:hover {
      color: #fff;
    }
  }

  .radioButton__icons {
    max-width: 18px;
    margin: 13px;
    color: ${({ checked }) => (checked ? '#ffd74f' : '')};

    @media (max-width: 400px) {
      margin: 9px;
    }
  }
`;
