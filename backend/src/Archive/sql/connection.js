const mysql = require("mysql");
require("dotenv").config();

class Connection {
	constructor() {
		if (!this.pool) {
			console.log("creating connection..");
			this.pool = mysql.createPool({
				connectionLimit: 100,
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASS,
				database: process.env.DB_DATABASE,
			});

			return this.pool;
		}
		return this.pool;
	}
}

const instance = new Connection();

module.exports = instance;
