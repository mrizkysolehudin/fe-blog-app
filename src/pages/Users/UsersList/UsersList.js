import React from "react";
import hisoka from "assets/img/hisoka.jpg";
import { MailIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const UsersList = () => {
	return (
		<div className="bg-gray-900 min-h-screen">
			<main className="pt-10">
				<article className="bg-white py-8  px-8 flex gap-x-40 items-center">
					<div className="flex items-center">
						<img
							src={hisoka}
							alt=""
							className="w-11 h-11 rounded-full"
						/>

						<div className="pl-4 text-sm">
							<p className="font-bold">de de</p>
							<p className="text-gray-600 text-xs">
								dede@gmail.com
							</p>
						</div>
					</div>

					<div className="flex items-center h-fit ">
						<p className="text-xs text-indigo-600 bg-indigo-100 px-12 rounded-full py-1">
							Starter Account
						</p>
						<p className="ml-8 text-sm font-semibold">
							<span className="text-orange-600 pr-2 text-base">
								0
							</span>
							followers
						</p>
					</div>

					<div className="flex">
						<p className="border-2 border-gray-200 py-1 px-2 font-semibold text-orange-500  rounded-sm">
							0 - posts
						</p>
						<Link
							to={`/profile/231`}
							className="flex items-center border-2 border-orange-500 hover:bg-green-400 text-gray-600 px-2 text-xs ml-3 rounded-sm">
							Profile
						</Link>
						<button className="bg-red-600 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-red-700">
							Block
						</button>
						<button className=" bg-green-700 px-2 ml-3 rounded-md border border-orange-600 hover:bg-green-400">
							<MailIcon className="w-6 h-6 text-white absolute" />
							<p className="pl-8 text-orange-400">Message</p>
						</button>
					</div>
				</article>

				<article className="bg-white py-8  px-8 flex gap-x-40 items-center mt-4">
					<div className="flex items-center">
						<img
							src={hisoka}
							alt=""
							className="w-11 h-11 rounded-full"
						/>

						<div className="pl-4 text-sm">
							<p className="font-bold">de de</p>
							<p className="text-gray-600 text-xs">
								dede@gmail.com
							</p>
						</div>
					</div>

					<div className="flex items-center h-fit ">
						<p className="text-xs text-indigo-600 bg-indigo-100 px-12 rounded-full py-1">
							Starter Account
						</p>
						<p className="ml-8 text-sm font-semibold">
							<span className="text-orange-600 pr-2 text-base">
								0
							</span>
							followers
						</p>
					</div>

					<div className="flex">
						<p className="border-2 border-gray-200 py-1 px-2 font-semibold text-orange-500  rounded-sm">
							0 - posts
						</p>
						<Link
							to={`/profile/231`}
							className="flex items-center border-2 border-orange-500 hover:bg-green-400 text-gray-600 px-2 text-xs ml-3 rounded-sm">
							Profile
						</Link>
						<button className="bg-red-600 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-red-700">
							Block
						</button>
						<button className=" bg-green-700 px-2 ml-3 rounded-md border border-orange-600 hover:bg-green-400">
							<MailIcon className="w-6 h-6 text-white absolute" />
							<p className="pl-8 text-orange-400">Message</p>
						</button>
					</div>
				</article>
			</main>
		</div>
	);
};

export default UsersList;
