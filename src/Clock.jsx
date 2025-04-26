import React, { useState, useEffect } from 'react';
export const TimeContext = React.createContext();

const Clock = ({children}) => {
  const [time, setTime] = useState(new Date());
  const [showDivisibleMessage, setShowDivisibleMessage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      setShowDivisibleMessage(now.getMinutes() % 5 === 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <TimeContext.Provider value={time}>
    <div className = "clock">
      <p>Текущее время: {formatTime(time)}</p>
      <p>Дата: {formatDate(time)}</p>
      {showDivisibleMessage && <p>Время делится на 5</p>}
    </div>
    {children}
    </TimeContext.Provider>
  );
};

export default Clock;