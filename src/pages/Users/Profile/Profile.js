import React, { useEffect, useState } from "react";
import {
	EyeIcon,
	MailIcon,
	UploadIcon,
	UserIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "redux/slices/users/usersSlices";
import DateFormatter from "utils/DateFormatter";
import LoadingComponent from "utils/LoadingComponent";

export default function Profile() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const users = useSelector((state) => state.users);

	const { profile, profileAppErr, profileLoading, profileServerErr, userAuth } =
		users;

	useEffect(() => {
		dispatch(userProfileAction(id));
	}, [id, dispatch]);

	const navigate = useNavigate();

	const sendMailNavigate = () => {
		navigate("/send-email", {
			state: {
				email: profile?.email,
				id: profile._id,
			},
		});
	};

	const isLoginUser = userAuth?._id === profile?._id;

	return (
		<div className="bg-green-700 min-h-screen w-full">
			{profileLoading ? (
				<LoadingComponent />
			) : profileAppErr || profileServerErr ? (
				<h1 className="text-yellow-400 text-2xl">
					{profileAppErr} {profileServerErr}
				</h1>
			) : (
				<div className="bg-white min-h-screen overflow-hidden max-w-[61rem] mx-auto">
					<section>
						<img
							className="h-48 w-full object-cover "
							src={profile?.profilePhoto}
							alt=""
						/>
					</section>

					<section className="border-b-[1.1px] border-yellow-900/70 flex">
						<div className="px-5 h-64 flex flex-col justify-center ">
							<img
								className="w-32 h-32 rounded-full mt-12 mb-8 object-cover"
								src={profile?.profilePhoto}
								alt={profile?.firstName}
							/>
							<p className="font-bold text-2xl">
								{profile?.firstName} {profile?.lastName}
							</p>
						</div>

						<article>
							<div className="flex gap-x-2 mt-2">
								<p className="font-bold text-xl -mt-1">
									{profile?.firstName} {profile?.lastName}
								</p>
								<div>
									<p className="bg-yellow-100 text-sm text-yellow-800 font-semibold pb-1 px-2">
										{profile?.accountType}
									</p>
								</div>

								<div>
									{profile?.isAccountVerified ? (
										<p className="bg-green-700/80 text-gray-100 text-sm rounded-md px-2 ">
											Account Verified
										</p>
									) : (
										<p className="ml-2 items-center px-3 py-0.5  rounded-lg text-sm font-medium bg-red-600 text-gray-300">
											Unverified Account
										</p>
									)}
								</div>
							</div>

							<div>
								<p className="py-2 text-lg pl-4 mt-2">
									Date Joined: <DateFormatter date={profile?.createdAt} />
								</p>
							</div>

							<div className="flex pt-4 text-green-600 gap-x-2">
								<p>{profile?.posts?.length} post</p>
								<p>{profile?.followers?.length} followers</p>
								<p>{profile?.following?.length} following</p>
							</div>

							<div className="flex mt-2 cursor-pointer">
								<p>
									<EyeIcon className="w-6 h-6 " />
								</p>
								<p className="text-blue-400 pl-2">
									Number of viewers: {profile?.viewedBy?.length}
								</p>
							</div>

							<div>
								{isLoginUser && (
									<Link
										to={`/upload-profile-photo`}
										className="border flex w-fit px-10 py-2 border-gray-400/60 rounded-md mt-2 hover:bg-gray-100">
										<UploadIcon className="w-6 h-6 text-black/40" />
										<p className="text-sm font-medium text-gray-700 pl-2">Upload photo</p>
									</Link>
								)}
							</div>
						</article>

						<div className="flex mt-16 ml-4">
							{isLoginUser && (
								<Link
									to={`/update-profile/${id}`}
									className="flex items-center border-2 h-fit rounded-md py-2 px-3 hover:bg-gray-100">
									<UserIcon className="w-6 h-6 text-black/30" />
									<p className="text-gray-500 font-medium text-sm flex justify-center pl-1">
										Update Profile
									</p>
								</Link>
							)}

							<button
								onClick={sendMailNavigate}
								className="flex bg-indigo-800 h-fit text-yellow-600 border-[1px] border-yellow-900 rounded-md py-2 font-semibold ml-4 px-4 hover:bg-yellow-700 hover:text-yellow-500">
								<MailIcon className="w-6 h-6 text-white" />
								<p className="pl-2">Send Message</p>
							</button>
						</div>
					</section>

					<section className="flex gap-x-10 px-5 text-center text-xl mb-10">
						<div className="w-[32%]">
							<p className="border-b-2 border-gray-500  ">
								Who viewed my profile: {profile?.viewedBy?.length}
							</p>

							{profile?.viewedBy?.length <= 0 ? (
								<h1>No View</h1>
							) : (
								profile?.viewedBy?.map((viewer, index) => (
									<div key={index} className="flex mt-2">
										<img
											className="w-20 h-20 rounded-full  cursor-pointer object-cover"
											src={viewer.profilePhoto}
											alt=""
										/>
										<div className="text-start ml-6 mt-4 font-semibold">
											<p className="text-[16px] ">
												{viewer?.firstName + " " + viewer?.lastName}
											</p>
											<p className="text-[18px] text-indigo-700 -mt-1">
												{viewer?.accountType}
											</p>
										</div>
									</div>
								))
							)}
						</div>

						<div className="w-[68%]">
							<p className="border-b-2 border-gray-500 ">
								My Post: {profile?.posts?.length}
							</p>
							<div className="space-y-8">
								{profile?.posts?.length <= 0 ? (
									<h1 className="text-center tex-xl">No Post Found</h1>
								) : (
									profile?.posts?.map((post, index) => (
										<article key={index} className="mt-3 flex">
											<img
												className="w-36 h-44 rounded-md  cursor-pointer"
												src={post?.image}
												alt=""
											/>

											<div className="ml-6 text-start">
												<h3 className="text-2xl font-bold text-green-600 mb-1 ">
													{post?.title}
												</h3>
												<p className="text-[17px] text-gray-500">{post?.description}</p>
												<div className="-mt-1">
													<Link
														to={`/posts/${post?._id}`}
														className="text-[17px] text-indigo-500 hover:underline">
														Read more
													</Link>
												</div>
											</div>
										</article>
									))
								)}
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
}
