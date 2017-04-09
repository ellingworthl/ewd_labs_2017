import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
//CHALLENGE - correct, can mirror contacts (data: use News data from earlier lab or week 8 (first part of file)!): 
//import postsRouter from './api/posts';

const server = express();

server.use('/api/contacts', contactsRouter);
//CHALLENGE - correct, it is OK to put in a second server call: 
//server.use('/api/posts', postsRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});