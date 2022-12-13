import React from "react";
import { Outlet } from "react-router-dom";

export default function PublicRoute({ children }) {
	return children || <Outlet />;
}
