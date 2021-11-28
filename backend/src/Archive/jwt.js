function generateJwtToken(id) {
	const token = jwt.sign({ id }, process.env.JWT_SECRET);
	return token;
}
