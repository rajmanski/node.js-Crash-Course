const express = require('express');

const app = express();

app.set('view engine', 'ejs');

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
    res.render('about');
})

app.use((req, res) => {
    res.render('create');
})


app.listen(3000);