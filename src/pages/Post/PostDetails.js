import React from "react";
import hisoka from "assets/img/hisoka.jpg";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

const PostDetails = () => {
	return (
		<div className="bg-gray-800 min-h-screen">
			<section className="px-4 pt-16">
				<img className="object-cover w-full h-96" src={hisoka} alt="" />
			</section>

			<section className="max-w-xs mx-auto pt-24 pl-7">
				<h1 className="text-white text-6xl border-b-[0.5px] border-gray-300/60 pb-12 w-fit px-5 font-bold">
					Seminar
				</h1>

				<div className="pt-16 flex">
					<img
						src={hisoka}
						className="w-24 h-24 rounded-full"
						alt=""
					/>

					<div className="ml-9 mt-5">
						<p className="text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
							Lucif Chrollo
						</p>
						<p className="text-gray-200/30">8 Dec 2022</p>
					</div>
				</div>
			</section>

			<div className="text-start max-w-xl mx-auto mt-16">
				<p className="text-gray-200 text-xl">Seminar kampus</p>

				<div className="flex mt-5">
					<PencilAltIcon className="w-10 h-10 text-yellow-300 ml-4 mr-7" />
					<TrashIcon className="w-10 h-10 text-red-700" />
				</div>
			</div>

			<div>
				<div className=" max-w-xl mx-auto flex justify-center mt-5">
					<div>
						<input
							type="text"
							placeholder="Add new comment"
							className="pt-1 pb-2 px-2 rounded-md placeholder:text-sm"
						/>

						<button className="bg-indigo-600 text-sm text-white font-semibold py-2 px-2 rounded-md ml-2">
							Submit
						</button>
					</div>
				</div>

				<p className="text-center ml-6 text-red-400 pt-2">
					Decription is required
				</p>
			</div>

			<div className="ml-8 mt-6 pb-20">
				<div className="max-w-sm mx-auto text-center bg-gray-200/20 py-3">
					<p className="border-b-[1.2px] border-white mx-3 text-start text-gray-400">
						0 Comments
					</p>
					<p className="text-lg text-yellow-500">No comments</p>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;
