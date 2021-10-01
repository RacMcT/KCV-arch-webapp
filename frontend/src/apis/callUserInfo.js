function callUserInfoAPI() {
	fetch("http://localhost:8080/users")
		.then((res) => res.json())
		.then((res) => this.setState({ userInfo: res }))
		.catch((err) => console.log(err));
}

export default callUserInfoAPI;
