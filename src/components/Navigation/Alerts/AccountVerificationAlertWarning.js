import { ExclamationIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { accVerificationSendTokenAction } from "redux/slices/accountVerification/accVerificationSlices";

export default function AccountVerificationAlertWarning() {
	const dispatch = useDispatch();

	return (
		<div className="flex gap-x-3 bg-red-500 border-l-4 border-yellow-400 p-1">
			<ExclamationIcon className="text-sm w-5 h-5 text-yellow-500" />
			<p className="text-sm text-yellow-200">
				Your account is not verified.
			</p>
			<button
				onClick={() => dispatch(accVerificationSendTokenAction())}
				className="text-sm underline text-green-200 hover:text-yellow-600">
				Click this to verified
			</button>
		</div>
	);
}
