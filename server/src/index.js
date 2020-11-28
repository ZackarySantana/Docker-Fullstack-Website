const app = require('express')();
const sql = require('mysql');

const database_name = process.env.DB_NAME;
const database_password = process.env.DB_PASSWORD;

const con = sql.createConnection({
    host: "database",
    port: 3306,
    user: "root",
    password: database_password,
    database: database_name
});

app.get('/', (req, res) => {
    
        con.query("SELECT * FROM persons", function (err, result) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            res.send(result)
        });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`apps is listening on http://localhost:${port}`);
});