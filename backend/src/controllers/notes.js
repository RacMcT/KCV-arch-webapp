const mysql = require("mysql");
require("dotenv").config();
const { handleSQLError } = require("../sql/error");

const getAllNotes = (req, res) => {
	pool.query("SELECT * FROM usernotes", (err, rows) => {
		console.log(err);
		if (err) return handleSQLError(res, err);

		return res.json(rows);
	});
};

const getNotesById = (req, res) => {
	let sql = "SELECT * FROM notes WHERE notes_id = ? ";
	sql = mysql.format(sql, [req.params.id]);

	pool.query(sql, (err, rows) => {
		if (err) return handleSQLError(res, err);
		return res.json(rows);
	});
};

const createNote = (req, res) => {
	let sql = "INSERT INTO usernotes (Note) VALUES(?)";
	console.log(req.body);
	sql = mysql.format(sql, [req.body.note]);

	pool.query(sql, (err, results) => {
		if (err) return handleSQLError(res, err);
		return res.json({ newId: results.insertId });
	});
};

module.exports = { getAllNotes, getNotesById, createNote };
