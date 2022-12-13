import React from "react";
import { Outlet } from "react-router-dom";

export default function GuestRoute({ children }) {
	return children || <Outlet />;
}
