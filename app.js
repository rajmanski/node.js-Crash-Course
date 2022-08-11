const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(express.urlencoded());

app.get('/', (req,res) => {
    const blogs = [
        {title: 'Blog 1', snippet: 'lorem20 02 0202202020202020'},
        {title: 'Blog 2', snippet: 'lorem20 02 asdasdasdas'},
        {title: 'Blog 3', snippet: 'lorem20 02 0202++++++++546545+----20202+0202020'},
    ];
    res.render('index', { title: 'Home', blogs, });
})

app.get('/about', (req,res) => {
    res.render('about');
})

app.get('/blogs/create', (req,res) => {
    res.render('creat');
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save();
})

app.use((req, res) => {
    res.status(404).redirect('404');
})


app.listen(3000);