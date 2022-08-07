const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Lalalala</h1>')
})

app.get('/about', (req,res) => {
    res.sendFile('/views/about.html', { root: __dirname});
})


app.use((req, res) => {
    res.sendFile('/views/404.html', {root: __dirname});
})
app.listen(3000);