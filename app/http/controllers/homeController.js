const Menu = require('../../models/menu');

function homeCopntroller() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            console.log(pizzas)
            return res.render('home')
        }
    }
}

module.exports = homeCopntroller;