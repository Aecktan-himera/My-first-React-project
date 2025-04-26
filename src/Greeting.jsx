import { useState, useEffect } from 'react';

const Greeting = ({ name }) => {
  const [prevName, setPrevName] = useState(name);
  const [nameChanged, setNameChanged] = useState(false);

  useEffect(() => {
    if (prevName !== name && prevName !== '') {
      setNameChanged(true);
    }
    setPrevName(name);
  }, [name, prevName]);

  return (
    <div>
      {nameChanged ? (
        <p className = "greet">Привет, у тебя поменялось имя, <br/>теперь ты {name}!</p>
      ) : (
        <p className = "greet">Привет, {name}!</p>
      )}
    </div>
  );
};

export default Greeting;
