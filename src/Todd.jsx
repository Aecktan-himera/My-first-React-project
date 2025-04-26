import { useContext, useState, useEffect } from 'react';
import { TimeContext } from './Clock';

const Todd = () => {
  const currentTime = useContext(TimeContext);
  const [showimage, setImage] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userTimezoneOffset, setUserTimezoneOffset] = useState(0);
  useEffect(() => {
    const offset = new Date().getTimezoneOffset() / 60;
    setUserTimezoneOffset(offset);
  }, []);
  const getReleaseDate = () => {
  const releaseDate = new Date(2025, 3, 22, 18, 0, 0);
  const userOffset = new Date().getTimezoneOffset();
  const correctedReleaseDate = new Date(releaseDate.getTime() + (180 + userOffset) * 60 * 1000);
    
  return correctedReleaseDate;
};

const getTimeDifference = () => {
  if (!currentTime) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const releaseDate = getReleaseDate();
  const diff = currentTime - releaseDate;

  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const { days, hours, minutes, seconds } = getTimeDifference();

  const images = [
    "/images/photo_1.jpg",
    "/images/photo_2yes.jpg",
    "/images/photo_2no.jpg"
    
  ];

  const handleYesClick = () => {
    setImage(false);
    setCurrentImageIndex(1);
  };

  const handleNoClick = () => {
    setImage(false);
    setCurrentImageIndex(2);
  };

  return (
    <div className="todd1"> 
      <div>
        <img src={images[currentImageIndex] } className="toddpic" alt="Todd" />
        <br />
        <button onClick={handleYesClick} className="btn">
          Да
        </button>
        <button onClick={handleNoClick} className="btn">
          Нет
        </button>
      </div>
      <p style={{ marginTop: '10px' }}>
        С момента релиза <br />
        The Elder Scrolls IV: Oblivion Remastered <br />
        прошло
        <br /> {days} дн. {hours} ч. {minutes} мин. {seconds} сек.
      </p>
    </div>
  );
};

export default Todd;