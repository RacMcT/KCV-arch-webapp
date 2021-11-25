import asyncHandler from "express-async-handler";
import { generateJwtToken } from "../utils/jwt";

require("dotenv").config();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const conn = require("../database/database");

async function findById(userId) {
	const sql = mysql.format("SELECT * FROM userinfo WHERE ID = ?", [userId]);
	console.log("formatted query");
	console.log(sql);
	return new Promise((resolve, reject) => {
		conn.query(sql, (error, results) => {
			if (error) {
				reject("Error with SQL");
			}
			console.log("no sql error");
			resolve(results[0]);
		});
	});
}
//has class user and update function is in user class
// do inline or create own class?

const updateUserProfile = asyncHandler(async (req, res) => {
	findById(req.user._id)
		.then((user) => {
			//right here: run update to mysql database!!

			// user.name = req.body.username || user.username;
			// user.email = req.body.email || user.email;
			// if (req.body.password) {
			// 	user.password = req.body.password;
			// }

			// const updatedUser = await user.save();

			res.json({
				_id: updatedUser._id,
				name: updatedUser.username,
				email: updatedUser.email,
				token: generateJwtToken(updatedUser._id), // need to send everything except password, but do send an update JWT token
				// need to look in login call for how generating JWT token to send back
				// put into utils folder and then imported here and in login - 11/24/2021
			});
		})
		.catch((error) => {
			console.log(error); //allows to debug on backend
			res.status(404);
			throw new Error("User Not Found");
		});
});

//Modifying Notes MySQL code to get user data, select by ID and then need to modify W3 code to update user info from form?!
const getAllUsers = (req, res) => {
	conn.query("SELECT * FROM userinfo", (err, rows) => {
		console.log(err);
		if (err) return handleSQLError(res, err);

		return res.json(rows);
	});
};

const getUserById = (req, res) => {
	let sql = "SELECT * FROM userinfo WHERE UserName = ? ";
	sql = mysql.format(sql, [req.params.id]);
	conn.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

//FROM W3 SCHOOLS UPDATE CODE EXAMPLE- NEED TO MODIFY TO MAKE IT ACTUALLY UPDATE IF USER SUBMITS UPDATE FORM
conn.connect(function (err) {
	if (err) throw err;
	var sqlUserUpdate =
		"UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
	("UPDATE userinfo SET email = ?  WHERE username = ''");
	("UPDATE userinfo SET ");
	conn.query(sqlUserUpdate, function (err, result) {
		if (err) throw err;
		console.log(result.affectedRows + " record(s) updated");
	});
});

export { updateUserProfile };
