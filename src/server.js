'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import bodyParser from 'body-parser';
import routes from './routes';
import { loginQuery, signupQuery, loggingQuery, summaryQuery } from './database';
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let loggedin = '';

app.post('/api/login', (req, res) => {
  loginQuery(req.body, (err, content) => {
    if (err) {
      console.log(err);
    } else {
      loggedin = req.body.UserName;
      console.log(loggedin)
      res.send(content);
    }
  })
});

app.post('/api/sign-up', (req, res) => {
  signupQuery(req.body, (err, content) => {
    if (err) {
      console.log(err);
    } else {
      res.send(content);
    }
  });
});

app.post('/api/sleep-log', (req, res) => {
  loggingQuery(req.body, (err, content) => {
    if (err) {
      console.log(err);
    } else {
      res.send(content);
    }
  });
});

app.get('/api/get-summary', (req, res) => {
  summaryQuery(req.body, (err, content) => {
    if (err) {
      console.log(err);
    } else {
      res.send(content);
    }
  });
});

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
