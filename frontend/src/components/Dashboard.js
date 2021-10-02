import React from "react";
import { getUser, removeUserSession } from "../utils/Common";
import Notes from "./Notes";

function Dashboard(props) {
	const user = getUser();

	// handle click event of logout button
	const handleLogout = () => {
		removeUserSession();
		props.history.push("/login");
	};

	return (
		<div>
			<h2>
				Welcome to the Koshkonong Creek Village Site Digital Archaeology
				Experience!
			</h2>
			<Notes />
			<button onClick={handleLogout} value='Logout' name='logoutbtn' />
		</div>
	);
}

export default Dashboard;
