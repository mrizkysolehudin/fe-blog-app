import React from "react";
import { MailIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	blockUserAction,
	fetchUsersAction,
	unBlockUserAction,
} from "redux/slices/users/usersSlices";
import LoadingComponent from "utils/LoadingComponent";

const UsersList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const { usersList, loading, appErr, serverErr, block, unblock } = users;

	useEffect(() => {
		dispatch(fetchUsersAction());
	}, [dispatch, block, unblock]);

	const navigate = useNavigate();

	const sendMailNavigator = () => {
		usersList.map((item) =>
			navigate("/send-email", {
				state: {
					email: item.email,
					id: item._id,
				},
			})
		);
	};

	return (
		<div className="bg-gray-900 min-h-screen">
			{loading ? (
				<LoadingComponent />
			) : appErr || serverErr ? (
				<p className="text-red-600 text-center mt-40">
					{appErr} {serverErr}
				</p>
			) : (
				<main className="pt-6">
					{usersList?.length <= 0 ? (
						<p className="text-white text-center font-bold text-3xl">
							No user found
						</p>
					) : (
						usersList?.map((item, index) => (
							<article
								key={index}
								className="bg-white py-8  px-8 flex gap-x-40 items-center mt-4">
								<div className="flex items-center">
									<img
										src={item?.profilePhoto}
										alt=""
										className="w-11 h-11 rounded-full"
									/>

									<div className="pl-4 text-sm">
										<p className="font-bold">
											{item?.firstName} {item?.lastName}
										</p>
										<p className="text-gray-600 text-xs">
											{item?.email}
										</p>
									</div>
								</div>

								<div className="flex items-center h-fit ">
									<p className="text-xs text-indigo-600 bg-indigo-100 px-12 rounded-full py-1">
										{item?.accountType}
									</p>
									<p className="ml-8 text-sm font-semibold">
										<span className="text-orange-600 pr-2 text-base">
											{item?.followers?.length}
										</span>
										followers
									</p>
								</div>

								<div className="flex">
									<p className="border-2 border-gray-200 py-1 px-2 font-semibold text-orange-500  rounded-sm">
										{item?.posts.length} - posts
									</p>
									<Link
										to={`/profile/${item?._id}`}
										className="flex items-center border-2 border-orange-500 hover:bg-green-400 text-gray-600 px-2 text-xs ml-3 rounded-sm">
										Profile
									</Link>

									{item?.isBlocked ? (
										<button
											onClick={() =>
												dispatch(
													unBlockUserAction(item._id)
												)
											}
											className="bg-green-600 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-green-700">
											UnBlock
										</button>
									) : (
										<button
											onClick={() =>
												dispatch(
													blockUserAction(item._id)
												)
											}
											className="bg-red-600 ml-3 px-2 rounded-md text-sm text-gray-300 hover:bg-red-700">
											Block
										</button>
									)}

									<button
										onClick={sendMailNavigator}
										className=" bg-green-700 px-2 ml-3 rounded-md border border-orange-600 hover:bg-green-400">
										<MailIcon className="w-6 h-6 text-white absolute" />
										<p className="pl-8 text-orange-400">
											Message
										</p>
									</button>
								</div>
							</article>
						))
					)}
				</main>
			)}
		</div>
	);
};

export default UsersList;
