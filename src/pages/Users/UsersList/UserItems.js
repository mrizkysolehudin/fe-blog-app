import React from "react";
import { MailIcon } from "@heroicons/react/solid";
import {
	blockUserAction,
	unBlockUserAction,
} from "redux/slices/users/usersSlices";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserItems = (user) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const sendMailNavigator = () => {
		navigate("/send-email", {
			state: {
				email: user?.user.email,
				id: user?.user._id,
			},
		});
	};

	return (
		<main className="pt-6">
			<article
				key={user.user._id}
				className="bg-white py-8  px-8 flex items-center mt-4">
				<section className="flex items-center  w-1/3">
					<img
						src={user.user?.profilePhoto}
						alt=""
						className="w-11 h-11 rounded-full"
					/>

					<div className="pl-4 text-sm">
						<p className="font-bold">
							{user.user?.firstName} {user.user?.lastName}
						</p>
						<p className="text-gray-600 text-xs">
							{user.user?.email}
						</p>
					</div>
				</section>

				<section className="flex justify-between w-2/3">
					<div className="flex items-center h-fit ">
						<p className="text-xs text-indigo-600 bg-indigo-100 px-12 rounded-full py-1">
							{user.user?.accountType}
						</p>
						<p className="ml-8 text-sm font-semibold">
							<span className="text-orange-600 pr-2 text-base">
								{user.user?.followers?.length}
							</span>
							followers
						</p>
					</div>

					<div className="flex">
						<p className="border-2 border-gray-200 py-1 px-2 font-semibold text-orange-500  rounded-sm">
							{user.user?.posts.length} - posts
						</p>
						<Link
							to={`/profile/${user.user?._id}`}
							className="flex items-center border-2 border-orange-500 hover:bg-green-400 text-gray-600 px-2 text-xs ml-3 rounded-sm">
							Profile
						</Link>

						{user.user?.isBlocked ? (
							<button
								onClick={() =>
									dispatch(unBlockUserAction(user.user._id))
								}
								className="bg-gray-500 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-gray-700">
								UnBlock
							</button>
						) : (
							<button
								onClick={() =>
									dispatch(blockUserAction(user.user._id))
								}
								className="bg-red-600 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-red-700">
								Block
							</button>
						)}

						<button
							onClick={sendMailNavigator}
							className=" bg-green-700 px-2 ml-3 rounded-md border border-orange-600 hover:bg-green-400">
							<MailIcon className="w-6 h-6 text-white absolute" />
							<p className="pl-8 text-orange-400">Message</p>
						</button>
					</div>
				</section>
			</article>
		</main>
	);
};

export default UserItems;
