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
    
    // const filter = [];
    // videos.categories.forEach(function(category) {
    //     category.videos.forEach(function(vids) {
    //         console.log(vids);
    //     })
    // });
    // console.log(filter);
    // res.render('index', videos, filter);
    res.render('index', videos);
});

app.get('/videos/:videoId', (req,res) => {    
    const videoId = req.params.videoId;
    const video = videos.videos.find(video => video.id == videoId);

    res.render('videos', {video});
})

// listen on port 3000
app.listen(port, () => console.info(`listening on port on localhost:${port}`));

// app.get('/tmp', (req, res) => {
//     res.render('tmp')
// });

// app.get('/videos', (req, res) => {
//     res.render('videos')
// });

