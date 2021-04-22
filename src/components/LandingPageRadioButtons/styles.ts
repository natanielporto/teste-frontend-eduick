import styled from 'styled-components';

interface IChecked {
  checked: boolean;
}

export const ContainerRoleSelector = styled.div`
  display: flex;

  div {
    display: flex;
    margin-right: 70px;
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
  }
`;
