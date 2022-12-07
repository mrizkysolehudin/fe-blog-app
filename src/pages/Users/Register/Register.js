import { LockOpenIcon, UserAddIcon } from "@heroicons/react/outline";
import React from "react";

function Register() {
	return (
		<div className="bg-gray-800 min-h-screen">
			<div className="flex max-w-5xl mx-auto gap-x-16">
				<section className="w-6/12 h-[400px] mt-60">
					<p className="text-blue-400 font-bold text-lg mb-8">
						Register Account
					</p>
					<h1 className="text-white text-5xl font-bold">
						Create an account <br />
						and start pending <br />
						down your ideas
					</h1>
				</section>
				<section className="w-6/12">
					<div className="bg-gray-600 h-auto rounded-lg py-20 mt-16 px-16">
						<form className="flex flex-col gap-y-7">
							<h3 className="text-white text-2xl font-bold mb-4">
								Register Account
							</h3>

							<div>
								<input
									type="text"
									name="firstName"
									placeholder="First Name"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />
							</div>
							<div>
								<input
									type="text"
									name="lastName"
									placeholder="Last Name"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />
							</div>
							<div>
								<input
									type="text"
									name="gmail"
									placeholder="example@gmail.com"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />
							</div>
							<div>
								<input
									type="text"
									name="password"
									placeholder="Password"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<LockOpenIcon className="w-5 h-5 relative -mt-9 ml-7" />
							</div>

							<div>
								<button className="w-full rounded-full bg-blue-500 text-white font-bold py-4 hover:bg-blue-600">
									Register
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Register;
