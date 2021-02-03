module.exports = {
    getRandomNumber: function getRandomNumber(limit, res) {
        let random_number = Math.ceil(Math.random() * (limit));
        res.render('ej02', { max_number: limit, random_num: random_number });
    },
    sayHi: function sayHi(name) {
        return `Hi, ${name}, how is it going?`;
    },
    getRandomPos: function getRandomPos() {
        return ~~(Math.random() * 10);
    },
    addToCart: function addToCart(dep, req, res, cart) {
        console.log(dep);
        let product = dep.products.filter(product => product.name === req.params.name)[0];
        if (req.params.quant <= product.stock) {
            cart.push(product.name + ": " + req.params.quant);
            product.stock = product.stock - req.params.quant;
            res.redirect(`/ejEXTRA01/${dep.name}`);
        }
        else {
            res.redirect(`/ejEXTRA01/error/${product.name}`);
        }
    },
    reStock: function reStock(res, data) {
        data.workshop.forEach(dep => {
            dep.products.forEach(product => {
                product.stock = 10;
            });
        });
        res.render('ejEXTRA01_finished');
    }
}