const express = require('express')

const app = express()

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('first route')
})

app.listen(PORT, () => {
    console.log(`Server running in port: http://localhost:${PORT}`)
})