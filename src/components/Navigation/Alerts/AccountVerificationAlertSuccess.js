import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";

export default function AccountVerificationAlertSuccess() {
	const account = useSelector((state) => state.accountVerification);
	const { token } = account;

	return (
		<div className="flex gap-x-3 bg-green-50 p-2">
			<CheckCircleIcon className="text-sm w-5 h-5 text-green-500" />
			<p className="text-sm text-green-500">
				Please verify account with this link. <p>{token}</p>
			</p>
		</div>
	);
}
