import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "./Common";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
	return (
		<Routes>
			<Route
				{...rest}
				render={(props) =>
					!getToken() ? (
						<Component {...props} />
					) : (
						<Navigate to={{ pathname: "/dashboard" }} />
					)
				}
			/>
		</Routes>
	);
}

export default PublicRoute;
