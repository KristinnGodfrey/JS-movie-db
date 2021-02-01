// imports
const express = require('express');
const app = express();
const port = 3000
const videos = require('./videos.json')

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req,res) => {
    res.render('index', videos);
});

app.locals = require('./src/video-age.js');

app.get('/videos/:videoId', (req,res) => {    
    const video = videos.videos.find(video => video.id == req.params.videoId);
    res.render('videos', {video, videos});
})

// listen on port 3000
app.listen(port, () => console.info(`listening on port on localhost:${port}`));