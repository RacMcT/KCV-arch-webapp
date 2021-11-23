export function isUserSignedIn() {
	const token = localStorage.getItem("token");

	//it will not return the token (string) but a boolean (true or false). Depending if the token exist or not.
	return !!token;
}

export function storeTokenOnLocalStorage(token) {
	localStorage.setItem("token", token);
}

export function removeTokenFromLocalStorage() {
	localStorage.removeItem("token");
}
