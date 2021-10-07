//express packages for login files
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//post request to have when the client hits submit button the form data is sent to the server
// that data is checked in the MySQL userinfo table to see if the details are correct/match

app.post("/Login", function (request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		connection.query(
			"SELECT * FROM userinfo WHERE username = ? AND password = ?",
			[username, password],
			function (error, results, fields) {
				if (results.length > 0) {
					request.session.loggedin = true;
					request.session.username = username;
					response.redirect("/Home");
				} else {
					response.send("Incorrect Username and/or Password!");
				}
				response.end();
			}
		);
	} else {
		response.send("Please enter Username and Password!");
		response.end();
	}
});

app.get("/Home", function (request, response) {
	if (request.session.loggedin) {
		response.send("Welcome back, " + request.session.username + "!");
	} else {
		response.send("Please login to view this page!");
	}
	response.end();
});
