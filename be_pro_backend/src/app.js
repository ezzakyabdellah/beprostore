import 'dotenv/config';

// import * as Sentry from '@sentry/node';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';

import * as configs from '@/config';
import { authenticationMiddleware, sentryMiddleware } from '@/middleware';
import { jobEbayRefreshDataBase } from './jobs/refreshDataBase';

const { NODE_ENV } = process.env;

const app = express();

// Initialize sentry
// if (NODE_ENV !== 'development') {
//   // configuration
//   Sentry.init(configs.sentryConfig(app));

//   // handlers
//   app.use(Sentry.Handlers.requestHandler());
//   app.use(Sentry.Handlers.tracingHandler());
// }

// Required middleware list
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(configs.corsConfig));
app.use(compression(configs.compressionConfig));
app.use(cookieParser());

// Custom middleware list
app.use(authenticationMiddleware);
// if (NODE_ENV !== 'development') {
//   app.use(sentryMiddleware); // This should be loaded after authentication middleware.
// }

// Load router paths
configs.routerConfig(app);

// catch 404 and forward to error handler


// JOBS
jobEbayRefreshDataBase.schedule();

if (NODE_ENV === 'production') {
  console.log('NODE_ENV :::: ', NODE_ENV, NODE_ENV === 'production');
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/be_pro_frontend/dist')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'be_pro_frontend', 'dist', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use((req, res, next) => {
next(createError(404));
});

// Sentry error logging - error handler
// if (NODE_ENV !== 'development') {
//   app.use(Sentry.Handlers.errorHandler());
// }

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});

// app.use(notFound)
// app.use(errorHandler)

export default app;
