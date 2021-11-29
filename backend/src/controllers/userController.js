import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password, recaptcha } = req.body;

	// Validate Human with ReCaptcha
	const isHuman = await fetch(
		`https://www.google.com/recaptcha/api/siteverify`,
		{
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
			},
			body: `secret=6Lf_tWYdAAAAACyiakLgevvCAVs4WSXxF3sdhS6W&response=${recaptcha}`,
		}
	)
		.then((res) => res.json())
		.then((json) => json.success)
		.catch((err) => {
			throw new Error(`Error in Google Siteverify API. ${err.message}`);
		});

	if (humanKey === null || !isHuman) {
		throw new Error(`YOU ARE NOT A HUMAN.`);
	}

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid Email or Password");
	}

	console.log("SUCCESS!");
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(404);
		throw new Error("User already exists");
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("User not found");
	}
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			token: generateToken(updatedUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User Not Found");
	}
});

export { authUser, updateUserProfile, registerUser };
