import { useEffect, useState } from 'react';

import { subscribeToTimer } from './utils';

export const Realtime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    subscribeToTimer(timeStamp => setTime(timeStamp));
  }, []);

  if (!time) {
    return (
      <div>Time is loading</div>
    );
  }

  return (
    <div>Time served from socket: {time}</div>
  );
};
