
module.exports = {
    getRandomNumber: function getRandomNumber(limit, res) {
        let random_number = Math.ceil(Math.random() * (limit));
        res.render('ej02', { max_number: limit, random_num: random_number });
    }
}