import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { verifyAccountAction } from "redux/slices/accountVerification/accVerificationSlices";
import { logoutAction } from "redux/slices/users/usersSlices";

const AccountVerified = () => {
	const { token } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(verifyAccountAction(token));
	}, [dispatch, token]);

	const user = useSelector((state) => state.users);
	const { isLogout } = user;

	if (isLogout) return <Navigate to="/login" />;

	return (
		<div className="flex items-center bg-gray-900 h-screen text-white text-xl">
			<div className="max-w-xl mx-auto">
				<div className="bg-green-50 text-green-900 py-2 px-10 rounded-lg text-center -mt-32">
					<div className="flex justify-center">
						<CheckCircleIcon className="w-8 h-8" />
					</div>
					<p className="font-bold">Account berhasil diverifikasi.</p>
					<p className="text-sm">
						Silahkan logout terlebih dahulu dan login kembali.
					</p>
				</div>

				<div className="flex justify-center">
					<button
						onClick={() => dispatch(logoutAction())}
						className="bg-red-700 hover:bg-red-800 px-3 py-1 rounded-lg mt-2 font-semibold">
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default AccountVerified;
