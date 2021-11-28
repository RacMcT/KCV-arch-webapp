require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRouter = require("./routers/users");
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
	res.send("Welcome to the server!");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
