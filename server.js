const express = require('express')
const path = require('path');
const app = express()

const PORT = process.env.PORT || 4444


app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, (req, res) => {
    console.log(`started on http://localhost:${PORT}`)
})