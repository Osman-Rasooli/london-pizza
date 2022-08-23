const expres = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = expres();

const PORT = 5000;

app.get('/', (req, res) => {
    res.render('home');
});

// set Template Engine
app.use(expressLayouts);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs')

app.listen(PORT, () => {
    console.log('Listening on port 5000!');
})