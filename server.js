import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      const dt = new Date();
      const padL = (nr, chr = `0`) => `${nr}`.padStart(2, chr);

      const formatted = `${padL(dt.getMonth() + 1)}/${padL(dt.getDate())}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`;

      client.emit('timer', formatted);
    }, interval);
  });
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});
