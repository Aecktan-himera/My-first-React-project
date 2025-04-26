import { useState, useEffect } from 'react';
import Header from './Header';
import Greeting from './Greeting';
import Clock from './Clock';
import Todd from './Todd';


const Container = () => {
  const [name, setName] = useState('');

  // Генерация случайного имени
  const generateRandomName = () => {
    const names = ['Анна', 'Иван', 'Мария', 'Сергей', 'Ольга', 'Дмитрий', 'Елена', 'Алексей', 'Владимир','Елена','Екатерина','Виктория','Денис','Артур','Вероника','Евгений','Виктор', 'Ирина','Александр'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  // Установка начального имени и интервала для его изменения
  useEffect(() => {
    setName(generateRandomName());
    
    const interval = setInterval(() => {
      setName(generateRandomName());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Header />
      <Greeting name={name} />
      <Clock>
        <Todd />
        </Clock>
    </div>
  );
};

export default Container;
