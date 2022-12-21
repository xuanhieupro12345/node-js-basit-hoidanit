const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hỏi dân IT')
})
app.get('/about', (req, res) => {
    res.send('about chao')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})