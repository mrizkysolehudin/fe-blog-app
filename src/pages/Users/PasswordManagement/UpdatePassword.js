import { LockClosedIcon } from "@heroicons/react/outline";
import React from "react";

const UpdateePassword = () => {
	return (
		<div className="bg-gray-700 min-h-screen flex items-center justify-center">
			<div>
				<h1 className="text-gray-300 font-extrabold text-3xl text-center mb-10">
					Change your password
				</h1>
				<div className="bg-white py-9 px-10 rounded-xl">
					<form>
						<div className="flex items-center ml-6">
							<LockClosedIcon className="w-6 h-6 text-gray-700 mr-4" />
							<input
								type="passsword"
								placeholder="Password"
								className="rounded-r-full border-2 border-gray-300 py-4 px-6 w-80 placeholder:font-bold placeholder:text-gray-300"
							/>
						</div>
						<div>
							<p className="text-red-400 mt-6">
								Password is required
							</p>
							<button className="bg-indigo-700 w-full text-white text-sm font-semibold py-2 rounded-md mt-5 hover:bg-gray-800">
								Update Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateePassword;
