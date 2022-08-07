const express = require('express');
const router = require('./routes');
const app = express();

app.use(router)

app.listen(process.env.PORT || 8080);