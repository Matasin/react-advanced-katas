import { useState } from 'react';

export const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  if (count >= 2) {
    throw new Error('I crashed!');
  }

  return (
    <button onClick={handleClick}>
      I will crash after few clicks ({count})
    </button>
  );
};
