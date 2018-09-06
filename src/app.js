import express from 'express';

import morgan from 'morgan';

import signUpRouter from './routes/signUpRouter.js';
import profileRouter from './routes/profileRouter.js';
import signInRouter from './routes/signInRouter.js';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import noAuth from './middleware/401.js';
import noBody from './middleware/400.js';
import conflict from './middleware/409.js';


let app = express();

//dev & parser middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes middleware
app.use(signUpRouter);
app.use(signInRouter);
app.use(profileRouter);

//error middleware
app.use(notFound);
app.use(noAuth);
app.use(conflict);
app.use(noBody);
app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on ' + port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has closed');
    });
  },
  server: app,
};