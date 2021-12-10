const express = require('express');
const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool ({
    host:'localhost',
    user: 'root',
    database:'test_iterium',
    password:'root'
});

const app = express();

app.get('/', function(req, res) {
    pool.query('SELECT * FROM product').then((data) => {
        const product = data[0];
        const allProduct = product.map(e => `<li>${e.name}</li>`).join('');
        res.send(`
            <ul>
                ${allProduct}
            </ul>
        `);
    });
});

app.listen(3000, function() {
    console.log('server started');
});