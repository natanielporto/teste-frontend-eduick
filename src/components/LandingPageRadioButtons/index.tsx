import React, { useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import Button from '../Button';
import { ContainerRoleSelector, RadioButton } from './styles';

const LandingPageRadioButtons: React.FC = () => {
  const [teacherChecked, setTeacherChecked] = useState(true);
  const [studentChecked, setStudentChecked] = useState(false);

  const handleCheckRadioChange = (event: React.MouseEvent<HTMLElement>) => {
    const input = event.target as HTMLElement;

    if (input.innerText === "I'M A STUDENT") {
      setTeacherChecked(false);
      setStudentChecked(true);
    }

    if (input.innerText === "I'M A TEACHER") {
      setTeacherChecked(true);
      setStudentChecked(false);
    }
  };

  const buttonText: {
    label: string;
    value: string;
    checked: boolean;
  }[] = [
    {
      label: "I'M A TEACHER",
      value: 'teacher',
      checked: teacherChecked,
    },
    {
      label: "I'M A STUDENT",
      value: 'student',
      checked: studentChecked,
    },
  ];

  return (
    <>
      <ContainerRoleSelector>
        <div>
          {buttonText.map(el => (
            <RadioButton
              checked={el.checked}
              key={el.value}
              onClick={event => handleCheckRadioChange(event)}
            >
              {el.checked ? (
                <div className="radioButton__icons">
                  <FaCheckCircle />
                </div>
              ) : (
                <div className="radioButton__icons">
                  <FaRegCircle />
                </div>
              )}
              <span>{el.label}</span>
            </RadioButton>
          ))}
        </div>
        <Button origin="landingPage" text="SEARCH" />
      </ContainerRoleSelector>
    </>
  );
};

export default LandingPageRadioButtons;
