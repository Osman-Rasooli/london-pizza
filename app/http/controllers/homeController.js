
function homeCopntroller() {
    return {
        index(req, res) {
            res.render('home');
        }
    }
}

module.exports = homeCopntroller;