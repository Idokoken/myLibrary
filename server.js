//if(process.env.NODE_ENV !== production { require('dotenv').LOAD()})

const express = require('express');
const chalk = require('chalk');
const path = require('path');
const expresslayout = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
//app.set('layout', 'layouts/layout')
app.use(express.static(path.join(__dirname, 'public')))
//app.use(expresslayout);
 //mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to db'))


app.use('/', indexRouter)

app.listen(port, () => console.log(`...listening on ${chalk.green(3000)}`))