import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

// Active to connect redis
// import RedisConn from './lib/connection';

class App {
  constructor(port) {
    const app = this.expressApp = express();

    app.disable('x-powered-by');
    app.use(logger('dev', {
      skip: () => app.get('env') === 'test'
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '../public')));

    this.setRoutes();
    this.errorHandling();

    app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line
  }

  setRoutes() {
    // Routes
    this.expressApp.use('/', routes);
  }

  errorHandling() {
    // Catch 404 and forward to error handler
    this.expressApp.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    // Error handler
    this.expressApp.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
      res
        .status(err.status || 500)
        .render('error', {
          message: err.message
        });
    });
  }
}

export default App;
