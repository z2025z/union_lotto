const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('union_lotto.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the union_lotto database.');
});

const createTable = () => {
    const sql = `
        create table if not exists union_lotto(
            id integer primary key autoincrement,
            date date not null,
            red1 integer not null,
            red2 integer not null,
            red3 integer not null,
            red4 integer not null,
            red5 integer not null,
            red6 integer not null,
            blue integer not null
        )
    `
    db.run(sql, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Created table union_lotto.');
    });
}
createTable();