const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('union_lotto.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the union_lotto database.');
});
