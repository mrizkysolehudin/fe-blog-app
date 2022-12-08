import React from "react";

const UpdateProfileForm = () => {
	return (
		<div className="bg-gray-900 min-h-screen pb-10">
			<section>
				<h1 className="text-2xl text-gray-300 font-extrabold text-center pt-20 mb-9">
					Hei buddy{" "}
					<span className="text-green-300">lucif chrollo</span>, Do
					you want to <br /> update your profile?
				</h1>

				<div className="bg-white max-w-lg mx-auto px-10 py-9 rounded-xl">
					<form>
						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								First Name
							</label>
							<input
								type="text"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">
								First Name is required
							</p>
						</div>

						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								Last Name
							</label>
							<input
								type="text"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">
								Last Name is required
							</p>
						</div>

						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								Email
							</label>
							<input
								type="email"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">Email is required</p>
						</div>

						<div className="mb-5 flex flex-col">
							<label className="text-sm text-gray-800 font-semibold mb-1">
								Bio
							</label>
							<textarea
								cols="30"
								rows="6"
								className="border-black/20 border"></textarea>
						</div>

						<div className="border-gray-600/20 border-b-[0.5px] mb-2">
							<button className="bg-indigo-600 w-full py-2 rounded-md text-white font-semibold text-sm mb-4 hover:bg-indigo-700">
								Update
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default UpdateProfileForm;
