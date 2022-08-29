const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

const PORT = 5000;

// Database Connectivity
const uri = "mongodb+srv://admin:&$Lx3ChJQ*gbPq^@mern.tvekf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("pizza").collection("menu");
  // perform actions on the collection object

  console.log('database connected!');
  // client.close();
});

app.use(express.static('public'));

// set Template Engine
app.use(expressLayouts);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

require('./routes/web')(app);

app.listen(PORT, () => {
    console.log('Listening on port 5000!');
})