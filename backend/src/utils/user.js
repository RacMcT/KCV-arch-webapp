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
	password: {
		type: String,
		required: true,
	},
};


let matchPassword = async function (enteredPassword){
  if (enteredPassword == this.password){
    return await bcrypt.compare(enteredPassword, this.password);
  }
  if 
} 
// userSchema.methods.matchPassword = async function (enteredPassword) {
// 	return await bcrypt.compare(enteredPassword, this.password);
// };

// will encrypt password everytime its saved
userSchema.use("save", async function (next) {
	if (!this(isModified("password"))) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = ("User", userSchema);

export default User;

const hash = bcrypt.hashSync(plainTextPassword, 10);
return hash;
