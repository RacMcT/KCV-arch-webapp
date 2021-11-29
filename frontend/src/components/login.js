import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { useLocation } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();
	const { state } = useLocation();

	const handleLogin = () => {
		login().then(() => {
			navigate(state.path || "/dashboard");
		});
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={handleLogin}>Log in</button>
		</div>
	);
};

export default Login;
