require("dotenv").config();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const conn = require("../utils.old/database");

function logIn(req, res) {
	const { email, password } = req.body;
	console.log("recieved email & password");
	//get the user by email
	const sql = mysql.format("SELECT * FROM userinfo WHERE Email = ?", [email]);
	console.log("formatted query");
	console.log(sql);
	conn.query(sql, (error, results) => {
		if (error) {
			res.status(500).send("Error with SQL");
			return;
		}
		console.log("no sql error");
		const user = results[0];
		console.log(user);
		console.log(encryptPassword("foobar"));
		if (!user || !comparePasswords(password, user.Password)) {
			res.status(400).send("incorrect email or password");
			return;
		}
		console.log("password matches");

		const token = generateJwtToken(user.id);
		res.json({ token });
		return;
	});
}

async function registerUser(req, res) {
	const { email, password, name } = req.body;

	//we need to queries in order for this to work
	//first, make sure the user does not exist
	//second, the new user creation (insert into)

	//get the user my email
	const queryToGetUser = mysql.format(
		"SELECT *  FROM userinfo WHERE email = ?",
		[email]
	);

	conn.query(queryToGetUser, (error, results) => {
		if (error) {
			res.status(500).send("Error with SQL");
			return;
		}

		const user = results[0];

		if (user) {
			res.status(400).send("email already used");
			return;
		}

		const encryptedPassword = encryptPassword(password);

		//we now know the email used to create the new account has not been used
		//we can safely create (insert into) the new user
		const insertNewUser = mysql.format(
			"INSERT INTO userlist (name, email, password) VALUES(?, ?, ?)",
			[name, email, encryptedPassword]
		);

		conn.query(insertNewUser, (error, results) => {
			if (error) {
				res.status(500).send("Error with SQL");
				return;
			}
			const token = generateJwtToken(results.insertId);
			res.json({ token });
		});
	});
}

//middleware
function authenticateJwtToken(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization && authorization.split(" ")[1];

	if (!token) {
		res.status(401).send("Token missing");
		return;
	}

	jwt.verify(token, process.env.JWT_SECRET, function (error, user) {
		if (error) {
			res.status(403).send("Invalid token");
			return;
		}

		req.user = user;

		next();
	});

	next();
}

// helper functions
function comparePasswords(plainTextPassword, encryptedPassword) {
	const areEqual = bcrypt.compareSync(plainTextPassword, encryptedPassword);
	return areEqual;
}

function encryptPassword(plainTextPassword) {
	// const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(plainTextPassword, 10);
	return hash;
}

function generateJwtToken(id) {
	const token = jwt.sign({ id }, process.env.JWT_SECRET);
	return token;
}

module.exports = { logIn, registerUser, authenticateJwtToken };
