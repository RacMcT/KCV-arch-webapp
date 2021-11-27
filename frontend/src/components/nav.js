import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

function Nav() {
	const { authed, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
			{authed && <button onClick={handleLogout}>Logout</button>}
		</nav>
	);
}

export default Nav;
