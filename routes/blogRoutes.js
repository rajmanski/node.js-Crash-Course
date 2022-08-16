
const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    const blogs = [
        {title: 'Blog 1', snippet: 'lorem20 02 0202202020202020'},
        {title: 'Blog 2', snippet: 'lorem20 02 asdasdasdas'},
        {title: 'Blog 3', snippet: 'lorem20 02 0202++++++++546545+----20202+0202020'},
    ];
    res.render('index', { title: 'Home', blogs, });
})

router.get('/about', (req,res) => {
    res.render('about');
})

router.get('/blogs/create', (req,res) => {
    res.render('creat');
})

router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save();
})


module.exports = router;