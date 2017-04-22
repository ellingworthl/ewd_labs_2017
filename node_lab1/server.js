import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';//Week8 lab update (corrected typo import body-parser to import bodyParser
import postsRouter from './api/news';//Week 8, lab2 hackerNews

const server = express();

server.use('/api/contacts', contactsRouter);
server.use(express.static('public'));
server.use(bodyParser.json());
//server.use(bodyParser.urlencoded());
server.use(bodyParser.urlencoded({extended: true}));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});