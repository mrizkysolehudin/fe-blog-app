import React from "react";
import hisoka from "assets/img/hisoka.jpg";
import {
	EyeIcon,
	MailIcon,
	UploadIcon,
	UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Profile() {
	return (
		<div className="bg-green-700 min-h-screen w-full">
			<div className="bg-white min-h-screen overflow-hidden max-w-[61rem] mx-auto">
				<section>
					<img
						className="h-48 w-full object-cover "
						src={hisoka}
						alt=""
					/>
				</section>

				<section className="border-b-[1.1px] border-yellow-900/70 flex">
					<div className="px-5 h-64 flex flex-col justify-center ">
						<img
							className="w-32 h-32 rounded-full mt-12 mb-8"
							src={hisoka}
							alt=""
						/>
						<p className="font-bold text-2xl">Chrollo Lucif</p>
					</div>

					<article>
						<div className="flex gap-x-2 mt-2">
							<p className="font-bold text-xl -mt-1">
								Chrollo Lucif
							</p>
							<div>
								<p className="bg-yellow-100 text-sm text-yellow-800 font-semibold pb-1 px-2">
									Starter Account
								</p>
							</div>
							<div>
								<p className="bg-green-700/80 text-gray-100 text-sm rounded-md px-2 pb-1">
									Account Verified
								</p>
							</div>
						</div>

						<div>
							<p className="py-2 text-lg pl-4 mt-2">
								Date Joined: 7 Dec 2022
							</p>
						</div>

						<div className="flex pt-4 text-green-600 gap-x-2">
							<p>1 post</p>
							<p>0 followers</p>
							<p>0 following</p>
						</div>

						<div className="flex mt-2 cursor-pointer">
							<p>
								<EyeIcon className="w-6 h-6 " />
							</p>
							<p className="text-blue-400 pl-2">
								Number of viewers 1
							</p>
						</div>

						<div>
							<Link className="border flex w-fit px-10 py-2 border-gray-400/60 rounded-md mt-2 hover:bg-gray-100">
								<UploadIcon className="w-6 h-6 text-black/40" />
								<p className="text-sm font-medium text-gray-700 pl-2">
									Upload photo
								</p>
							</Link>
						</div>
					</article>

					<div className="flex mt-16 ml-4">
						<Link className="flex border-2 h-fit rounded-md py-2 px-3 hover:bg-gray-100">
							<UserIcon className="w-6 h-6 text-black/30" />
							<p className="text-gray-500 font-medium text-sm flex justify-center pl-1">
								Update Profile
							</p>
						</Link>
						<div className="flex bg-indigo-800 h-fit text-yellow-600 border-[1px] border-yellow-900 rounded-md py-2 font-semibold ml-4 px-4 hover:bg-yellow-700 hover:text-yellow-500">
							<MailIcon className="w-6 h-6 text-white" />
							<p className="pl-2">Send Message</p>
						</div>
					</div>
				</section>

				<section className="flex gap-x-10 px-5 text-center text-xl">
					<div className="w-[32%]">
						<p className="border-b-2 border-gray-500  ">
							Who viewed my profile : 1
						</p>

						<div className="flex mt-2">
							<img
								className="w-16 h-16 rounded-full"
								src={hisoka}
								alt=""
							/>
							<div className="text-start ml-4 font-semibold">
								<p className="text-[17px] ">Chrollo Lucif</p>
								<p className="text-[18px] text-indigo-700">
									Starter Account
								</p>
							</div>
						</div>
					</div>

					<div className="w-[68%]">
						<p className="border-b-2 border-gray-500 ">
							My Post -1
						</p>

						<div className="mt-3 flex">
							<img
								className="w-40 h-40 rounded-md"
								src={hisoka}
								alt=""
							/>

							<div className="ml-6 text-start">
								<h3 className="text-2xl font-bold text-green-600 ">
									Seminar
								</h3>
								<p className="text-[17px] text-gray-500">
									Seminar kampus
								</p>
								<Link className="text-[17px] text-indigo-500 hover:underline">
									Read more
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
