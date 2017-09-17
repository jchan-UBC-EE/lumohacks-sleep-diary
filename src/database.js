import express from 'express';
import mysql from 'mysql';

const c = mysql.createConnection({
    host: 'lumosleepdiary.cue09nzmpyxl.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'plin',
    password: 'ubclfs123',
    database: 'ubcsleeplog'
});

const app = express();

c.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});

let loginQuery = (login, callback) => {
    let sql = `SELECT * FROM Users WHERE UserName='${login.UserName}' AND Password='${login.Password}';`;
    let validation = '';

    c.query(sql, function (error, results, fields) {
        if (error) {
            callback(error, { validation: false });
        }
        if (results.length === 1) {
            callback(null, { validation: true });
        } else {
            callback(error, { validation: false });
        }
    });
}

export {
    loginQuery
}
