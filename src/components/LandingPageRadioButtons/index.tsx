import React, { useState } from 'react';
import Button from '../Button';
import { ContainerRoleSelector, RadioButton } from './styles';

const LandingPageRadioButtons: React.FC = () => {
  const [teacherChecked, setTeacherChecked] = useState(true);
  const [studentChecked, setStudentChecked] = useState(false);

  const handleCheckRadioChange = (value: string) => {
    if (value === 'student') {
      setTeacherChecked(!teacherChecked);
      setStudentChecked(!studentChecked);
    }

    if (value === 'teacher') {
      setTeacherChecked(!teacherChecked);
      setStudentChecked(!studentChecked);
    }
  };

  const buttonText: { label: string; value: string; checked: boolean }[] = [
    { label: "I'M A TEACHER", value: 'teacher', checked: teacherChecked },
    { label: "I'M A STUDENT", value: 'student', checked: studentChecked },
  ];

  return (
    <>
      <ContainerRoleSelector>
        <div>
          {buttonText.map(el => (
            <RadioButton checked={el.checked} key={el.value}>
              <input
                type="radio"
                checked={el.checked}
                value={el.value}
                onChange={e => handleCheckRadioChange(e.target.value)}
              />
              <label htmlFor={el.value} key={el.value}>
                {el.label}
              </label>
            </RadioButton>
          ))}
        </div>
        <Button origin="landingPage" text="SEARCH" />
      </ContainerRoleSelector>
    </>
  );
};

export default LandingPageRadioButtons;
