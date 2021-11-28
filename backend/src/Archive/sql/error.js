const handleSQLError = (res, err) => {
	console.log("SQL Error: ", err);
	return res.status(500).send("An unexpected error has occured.");
};

module.exports = { handleSQLError };
