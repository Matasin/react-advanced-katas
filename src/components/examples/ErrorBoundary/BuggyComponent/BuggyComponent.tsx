import { useState } from 'react';

import { Image } from '@/components/shared/Image';

export const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  if (count >= 2) {
    throw new Error('I crashed!');
  }

  return (
    <>
      <button onClick={handleClick}>
        I will crash after few clicks ({count})
      </button>
      <div>
        <code>
          {JSON.stringify({
            build: {
              sourcemap: true,
            },
          })}
        </code>
      </div>
      <Image
        src='/error-log-1.png'
        title='Error log from Sentry 1'
      />
      <Image
        src='/error-log-2.png'
        title='Error log from Sentry 2'
      />
    </>
  );
};
