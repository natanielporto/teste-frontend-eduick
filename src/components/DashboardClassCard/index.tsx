import { FaRegStar, FaStar } from 'react-icons/fa';
import Container from './styles';

interface ICardWriteProps {
  image: string;
  alt: string;
  stars: number;
  numberOfLessons: number;
  nameOfCourse: string;
}

function DashboardClassCard({
  image,
  alt,
  stars,
  numberOfLessons,
  nameOfCourse,
}: ICardWriteProps): JSX.Element {
  const fadedStars = 5 - stars;
  const goldStars = 5 - fadedStars;

  const goldStarsArray: { className: string }[] = [];
  const fadedStarsArray: { className: string }[] = [];

  for (let i = 0; i < fadedStars; i += 1) {
    fadedStarsArray.push({ className: 'container__grayStar' });
  }

  for (let i = 0; i < goldStars; i += 1) {
    goldStarsArray.push({ className: 'container__goldStar' });
  }

  const lessons = numberOfLessons > 1 ? ' LESSONS' : ' LESSON';

  return (
    <Container>
      <img src={image} alt={alt} />
      <div className="container__middleSection">
        <div>
          {goldStarsArray.map((el: { className: string }) => (
            <FaStar key={Math.random() * 500} className={el.className} />
          ))}
          {fadedStarsArray.map((el: { className: string }) => (
            <FaRegStar key={Math.random() * 10000} className={el.className} />
          ))}
        </div>
        <div className="container__middleSection__lessonsNumber">
          {numberOfLessons + lessons}
        </div>
      </div>
      <div className="container__bottomSection__className">{nameOfCourse}</div>
    </Container>
  );
}

export default DashboardClassCard;
