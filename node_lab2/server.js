import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
import bodyParser from 'body-parser';//Week8 lab update (corrected typo import body-parser to import bodyParser

const server = express();

server.use('/api/contacts', contactsRouter);
server.use(express.static('public'));
//configure body-parser (Week 8)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});