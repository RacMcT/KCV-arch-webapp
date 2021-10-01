import axios from "axios";
// import { setUserSession } from "..utils/Common";

function RegisterAPI(registerCredentials) {
	return axios.post("http://localhost:8080/Registration", {
		username: registerCredentials.username,
		password: registerCredentials.password,
		email: registerCredentials.email,
	});
}

export default RegisterAPI;

// .then((response) => {})
// .catch((error) => {
// 	if (error.response.status === 401) setError(error.response.data.message);
// 	else setError("Something went wrong. Please try again later.");
// });
