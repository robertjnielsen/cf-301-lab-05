'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;
require('dotenv').config();

app.listen(PORT, () => console.log('do things'));
