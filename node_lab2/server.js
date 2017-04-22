import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/news';
import bodyParser from 'body-parser';

const server = express();

server.use('/api/contacts', contactsRouter);
server.use('/api/news', postsRouter);
server.use(express.static('public'));
//configure body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
