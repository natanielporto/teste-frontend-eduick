import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Container from './styles';

interface ICardWriteProps {
  image: string;
  alt: string;
  stars: number;
  numberOfLessons: number;
  nameOfCourse: string;
}

const DashboardClassCard: React.FC<ICardWriteProps> = card => {
  const fadedStars = 5 - card.stars;
  const goldStars = 5 - fadedStars;

  const lessons = card.numberOfLessons > 1 ? ' LESSONS' : ' LESSON';
  return (
    <Container>
      <img src={card.image} alt={card.alt} />
      <div className="container__middleSection">
        <div>
          <FaStar className="container__goldStar" />
          <FaStar className="container__goldStar" />
          <FaStar className="container__goldStar" />
          <FaRegStar className="container__grayStar" />
          <FaRegStar className="container__grayStar" />
        </div>
        <div className="container__middleSection__lessonsNumber">
          {card.numberOfLessons + lessons}
        </div>
      </div>
      <div className="container__bottomSection__className">
        {card.nameOfCourse}
      </div>
    </Container>
  );
};

export default DashboardClassCard;
