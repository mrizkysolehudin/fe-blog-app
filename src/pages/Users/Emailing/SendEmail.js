import React from "react";

const SendEmail = () => {
	return (
		<div className="bg-gray-900 min-h-screen">
			<h1 className="text-gray-300 text-3xl font-extrabold text-center pt-20 pb-10">
				Send Message<span className="text-green-300">email title</span>
			</h1>

			<div className="bg-white max-w-md mx-auto h-fit py-6 px-10 rounded-md">
				<form>
					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Recipient Email
						</label>
						<input
							type="text"
							value="chrollolucif@gmail.com"
							disabled
							className="bg-gray-200 rounded-md px-3 py-2 text-sm"
						/>
					</div>

					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Subject
						</label>
						<input
							type="text"
							className="border-[1.5px] border-gray-200 rounded-md px-3 py-2 text-sm"
						/>

						<p className="text-red-500">Subject is required</p>
					</div>

					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Message
						</label>
						<textarea
							cols="30"
							rows="5"
							className="border-gray-300 border rounded-md text-sm p-4"></textarea>

						<p className="text-red-500">Message is required</p>
					</div>

					<button className="bg-indigo-600 w-full rounded-md text-white font-semibold text-sm py-2 mb-3 hover:bg-indigo-700">
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default SendEmail;
