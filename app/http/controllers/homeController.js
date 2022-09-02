const Menu = require('../../models/menu');
const mongoose = require('mongoose')

function homeCopntroller() {
    return {
        async index(req, res) {
            console.log('hi')
            const pizzas = await Menu.find();
            console.log(pizzas)
            return res.render('home')
        }
    }
}

module.exports = homeCopntroller;