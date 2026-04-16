const express = require('express');
const routes = require('./routes');
const app = express()
app.use(express.json())
const PORT=3000
app.listen(PORT, () => { console.log("servidor listo") })
app.use('/api', routes )