import bcrypt from "bcryptjs";

const userSchema = {
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	encryptedPassword: {
		type: String,
		required: true,
	},
};

//use squeezlie to store this stuff
//compare individual item from userUpdateProfile to see if they've changed

//write out to make sure salting/hashing first time password is entered- registration!!
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);

let matchPassword = async function (enteredPassword) {
	// Load hash from your password DB.
	bcrypt.compareSync(enteredPassword, hash);
};
matchPassword();

const User = ("User", userSchema);

export default User;

// const hash = bcrypt.hashSync(plainTextPassword, 10);
// return hash;
