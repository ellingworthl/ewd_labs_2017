import config from './config';
import express from 'express';
import contactsRouter from './api/contacts';
// import bodyParser from 'body-parser';//Week8 lab update (corrected typo import body-parser to import bodyParser
import postsRouter from './api/news';//Week 8, lab2 hackerNews

const server = express();
//var server = express();
//var bodyParser = require('body-parser')

server.use('/api/contacts', contactsRouter);
server.use(express.static('public'));
//configure body-parser (Week 8)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
// server.use('/api/news', postsRouter);//Week 8, lab2 hackerNews

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});