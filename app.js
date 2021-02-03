// imports
const express = require('express');

const path = require('path');
const videos = require('./videos.json');

const app = express();
const port = 3000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  title = 'Fræðslumyndbandaleigan';
  res.render('index', videos);
});

app.locals = require('./src/video-age.js');

app.get('/:videoId', (req, res) => {
  try {
    const video = videos.videos.find((video) => video.id == req.params.videoId);
    title = video.title;
    res.render('videos', { video, videos, title });
  } catch (error) {
    res.status(404);
    res.render('error', { title: '404, síða fannst ekki' });
  }
});

function notFoundHandler(req, res) {
  res.status(404);
  res.render('error', { title: '404, síða fannst ekki' });
}

function errorHandler(req, res) {
  res.status(500);
  res.render('error', { title: '500, villa' });
}

app.use(notFoundHandler);
app.use(errorHandler);

/* eslint-disable */
// listen on port 3000
app.listen(port, () => console.info(`listening on port on localhost:${port}`));
/* eslint-enable */
