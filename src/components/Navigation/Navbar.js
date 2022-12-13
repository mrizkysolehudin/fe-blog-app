import React from "react";
import { useSelector } from "react-redux";
import AdminNavbar from "./Admin/AdminNavbar";
import AccountVerificationAlertSuccess from "./Alerts/AccountVerificationAlertSuccess";
import AccountVerificationAlertWarning from "./Alerts/AccountVerificationAlertWarning";
import PrivateNavbar from "./Private/PrivateNavbar";
import PublicNavbar from "./Public/PublicNavbar";

export default function Navbar() {
	const users = useSelector((state) => state.users);
	const { userAuth } = users;

	const accountVerification = useSelector(
		(state) => state?.accountVerification
	);
	const { token, loading, appErr, serverErr } = accountVerification;

	return (
		<>
			{userAuth?.isAdmin ? (
				<AdminNavbar isLogin={userAuth} />
			) : userAuth ? (
				<PrivateNavbar isLogin={userAuth} />
			) : (
				<PublicNavbar />
			)}
			{userAuth && !userAuth.isVerified && (
				<AccountVerificationAlertWarning />
			)}
			{loading && <p className="text-center">Loading please wait...</p>}
			{token && <AccountVerificationAlertSuccess />}

			{appErr ||
				(serverErr && (
					<p className="text-center text-red-500">
						{appErr} {serverErr}
					</p>
				))}
		</>
	);
}
