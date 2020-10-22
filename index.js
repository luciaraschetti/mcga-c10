var _ = require('lodash');
var fs = require('fs');
var products = require('./data/products.json');

const prod150 = products.filter(product => product.price > 150);

fs.writeFile('./data/prod150.json', JSON.stringify(_.shuffle(prod150)), () => {
    console.log('Done');
})