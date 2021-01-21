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
    const filter = [];
    
    // console.log(videos.categories[0].videos[0]);
    // console.log(videos.videos[0].id);

    // for(let c = 0; c < 3; c++){
    //     filter.push(videos.categories[c].title);
    //     for(let i = 0; i < videos.categories[c].videos.length; i++) {
    //         for(let j = 0; j < videos.videos.length; j++) {
    //             if (videos.categories[c].videos[i] == videos.videos[j].id) {
    //                 filter.push(videos.videos[j].title);
    //             }
    //         }
    //     }        
    //     if(c<2) {
    //         filter.push('-');
    //     }
    // }
    // console.log(videos.categories.length);
    // console.log(videos.categories.videos[0].length);

    // res.render('index', {videos: videos, categories: categories});
    res.render('index', videos)
});

app.get('/videos/:videoId', (req,res) => {    
    const video = videos.videos.find(video => video.id == req.params.videoId);
    res.render('videos', {video, videos});
})

// listen on port 3000
app.listen(port, () => console.info(`listening on port on localhost:${port}`));

// app.get('/tmp', (req, res) => {
//     res.render('tmp')
// });

// app.get('/videos', (req, res) => {
//     res.render('videos')
// });

