import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const subscribeToTimer = (
  retrieveFunc: (time: string) => void
) => {
  socket.on('timer', timestamp => retrieveFunc(timestamp));
  socket.emit('subscribeToTimer', 1000);
};
