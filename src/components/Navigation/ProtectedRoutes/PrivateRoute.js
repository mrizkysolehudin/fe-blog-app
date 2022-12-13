import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const users = useSelector((state) => state.users);
	const { userAuth } = users;

	if (!userAuth) return <Navigate to="/login" />;
	return children || <Outlet />;
};

export default PrivateRoute;
