const mysql = require("mysql");
const conn = require("../database");
require("dotenv").config();

const handleSQLError = (res, err) => {
	console.log(err);
};

const getAllNotes = (req, res) => {
	conn.query("SELECT * FROM usernotes", (err, rows) => {
		console.log(err);
		if (err) return handleSQLError(res, err);

		return res.json(rows);
	});
};

const getNotesById = (req, res) => {
	let sql = "SELECT * FROM Notes WHERE Notes_ID = ? ";
	sql = mysql.format(sql, [req.params.id]);
	conn.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const createNote = (req, res) => {
	let sql = "INSERT INTO usernotes (Note) VALUES(?)";
	console.log(req.body);
	sql = mysql.format(sql, [req.body.note]);

	conn.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err);
		return res.json({ newId: results.insertId });
	});
};

module.exports = { getAllNotes, getNotesById, createNote };
