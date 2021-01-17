// imports
const express = require('express');
const app = express();
const port = 3000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req,res) => {
    res.render('index')
});

app.get('/tmp', (req, res) => {
    res.render('tmp')
});

// app.get('/videos/:videoId', (req,res) => {    
//     var data = {titles: []}
//     res.render('videos', {title: req.params.titles, titles: titles});
// })

// listen on port 3000
app.listen(port, () => console.info(`listening on port on localhost:${port}`));