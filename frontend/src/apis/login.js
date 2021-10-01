import axios from "axios";
// import { setUserSession } from "..utils/Common";

function LoginAPI(credentials) {
	return axios.post("http://localhost:8080/login", {
		username: credentials.username,
		password: credentials.password,
	});

	// .then((response) => {})
	// .catch((error) => {
	// 	if (error.response.status === 401) setError(error.response.data.message);
	// 	else setError("Something went wrong. Please try again later.");
	// });
}

export default LoginAPI;
