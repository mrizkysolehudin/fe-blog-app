import React from "react";
import { useSelector } from "react-redux";
import PrivateNavbar from "./Private/PrivateNavbar";
import PublicNavbar from "./Public/PublicNavbar";

export default function Navbar() {
	const users = useSelector((state) => state.users);
	const { userAuth } = users;
	console.log("users");
	console.log(users);
	return (
		<>
			{userAuth ? <PrivateNavbar isLogin={userAuth} /> : <PublicNavbar />}
		</>
	);
}
