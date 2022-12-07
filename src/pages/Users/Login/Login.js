import React from "react";
import {
	LockClosedIcon,
	LockOpenIcon,
	TrendingUpIcon,
} from "@heroicons/react/outline";

export default function Login() {
	return (
		<div className="bg-gray-900 min-h-screen">
			<div className=" max-w-5xl mx-auto flex pt-16">
				<section className="w-5/12 bg-white rounded-lg px-12 py-24 flex flex-col justify-center">
					<h3 className="text-2xl font-bold mb-12">
						Login to your Account
					</h3>

					<form>
						<div className="mb-12">
							<input
								type="text"
								name="email"
								placeholder="enter email"
								className="w-full placeholder:font-bold placeholder-gray-300 pl-20 pr-4"
							/>
							<LockOpenIcon className="w-5 h-6 relative -mt-6 ml-6 text-gray-500" />
						</div>

						<div>
							<input
								type="text"
								name="email"
								placeholder="Password"
								className="w-full placeholder:font-bold placeholder-gray-300 pl-20 pr-4"
							/>
							<LockClosedIcon className="w-5 h-6 relative -mt-6 ml-6 text-gray-500" />
						</div>

						<div>
							<button className="bg-blue-500 w-full rounded-full py-4 font-bold text-white mt-10 hover:bg-blue-600">
								Login
							</button>

							<button className="text-blue-800 hover:text-blue-600 font-semibold pt-2 pl-1">
								Forgot Password?
							</button>
						</div>
					</form>
				</section>
				<section className="w-7/12 text-center mt-24 pl-16">
					<div className="w-20 h-20 justify-center flex items-center rounded-lg bg-blue-500 mx-auto mb-12">
						<TrendingUpIcon className="w-12 h-12 text-white" />
					</div>
					<div className="text-gray-300 text-7xl font-bold">
						<h1>Ready to start?</h1>
						<h1>Login Now.</h1>
					</div>
				</section>
			</div>
		</div>
	);
}
