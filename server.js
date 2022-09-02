const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const Menu = require('./app/models/menu')

const app = express();

const PORT = 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:london-pizza@cluster0.rgt3mag.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async(err) => {
  const collection = await client.db("pizza").collection("menu");
  // perform actions on the collection object
  const pizzas = await collection.find().toArray();
  // console.log(pizzas)
  // console.log(err)
  
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

