import React from "react";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesAction } from "redux/slices/category/categorySlice";
import {
	fetchPostsAction,
	toggleAddDisLikesToPost,
	toggleAddLikesToPost,
} from "redux/slices/posts/postSlices";
import DateFormatter from "utils/DateFormatter";
import LoadingComponent from "utils/LoadingComponent";

function PostsList() {
	const dispatch = useDispatch();
	const category = useSelector((state) => state.category);
	const {
		categoryList,
		appErr: catAppErr,
		serverErr: CatServerErr,
		loading: catLoading,
	} = category;

	const post = useSelector((state) => state.post);
	const { postLists, appErr, serverErr, likes, dislikes } = post;

	useEffect(() => {
		dispatch(fetchPostsAction(""));
	}, [dispatch, likes, dislikes]);

	useEffect(() => {
		dispatch(fetchCategoriesAction());
	}, [dispatch]);

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="max-w-6xl w-full flex justify-between mx-10 pt-20 pb-18">
				<div>
					<p className="text-green-600 font-semibold">
						Latest Posts from our awesome authors
					</p>
					<h1 className="text-gray-300 text-5xl font-bold">
						Latest Post
					</h1>
				</div>

				<div>
					<button
						onClick={() => dispatch(fetchPostsAction(""))}
						className="text-white bg-green-700 font-bold rounded-lg rounded-r-none rounded-t-lg py-3 px-7 mt-2">
						View All Posts
					</button>
				</div>
			</section>

			<section className="mx-10 flex  mt-16">
				<div className="bg-gray-600 min-w-[240px] w-[280px] h-fit px-5 pt-5 pb-8 rounded-md mr-4">
					<h3 className="text-gray-500 font-bold pb-4">CATEGORIES</h3>
					<div className=" flex flex-col gap-y-4">
						{catLoading ? (
							<LoadingComponent />
						) : catAppErr || CatServerErr ? (
							<div className="text-orange-400 text-lg flex mx-auto">
								{catAppErr} {CatServerErr}
							</div>
						) : categoryList?.length <= 0 ? (
							<div className="text-orange-400 text-lg flex mx-auto">
								No Category Found
							</div>
						) : (
							categoryList?.map((item, index) => (
								<p
									key={index}
									onClick={() =>
										dispatch(fetchPostsAction(item?.title))
									}
									className="bg-gray-500 py-[7px] text-yellow-600 font-bold rounded-md px-3">
									{item.title}
								</p>
							))
						)}
					</div>
				</div>

				{appErr || serverErr ? (
					<h1 className="text-yellow-600 text-center text-lg">
						{appErr} {serverErr}
					</h1>
				) : postLists?.length <= 0 ? (
					<h1 className="text-yellow-400 flex items-center max-w-xs mx-auto text-lg">
						No Post Found
					</h1>
				) : (
					<div className="space-y-7">
						{post?.postLists &&
							post?.postLists?.map((item, index) => (
								<article key={index} className="flex">
									<div>
										<img
											src={item.image}
											className="w-60 h-[275px] rounded-t-md"
											alt=""
										/>
										<div className="bg-white flex items-center py-1 justify-evenly">
											<ThumbUpIcon
												onClick={() =>
													dispatch(
														toggleAddLikesToPost(
															item?._id
														)
													)
												}
												className={`w-8 h-8 ${
													item?.isLiked
														? "text-indigo-600"
														: "text-gray-600"
												} `}
											/>
											<p className="-ml-3">
												{item.likes.length}
											</p>
											<ThumbDownIcon
												onClick={() =>
													dispatch(
														toggleAddDisLikesToPost(
															item?._id
														)
													)
												}
												className={`w-8 h-8  ${
													item?.isDisLiked === true
														? "text-indigo-600"
														: " text-gray-600"
												} `}
											/>
											<p className="-ml-3">
												{item.disLikes.length}
											</p>
											<EyeIcon className="w-8 h-8 text-gray-400/70" />
											<p className="-ml-3">
												{item.numViews}
											</p>
										</div>
									</div>

									<div className="ml-2">
										<div>
											<h3 className="text-green-400 font-bold text-2xl pb-1">
												{item.title}
											</h3>
											<p className="text-gray-200">
												{item.description}
											</p>
											<Link
												to={`/posts/${item._id}`}
												className="text-indigo-500">
												Read More..
											</Link>
										</div>

										<div className="mt-6 flex">
											<img
												src={item?.user?.profilePhoto}
												className="w-12 h-12 rounded-full"
												alt=""
											/>
											<div className="ml-4">
												<p className="text-yellow-500 text-sm font-semibold">
													{item.user.firstName +
														" " +
														item.user.lastName}
												</p>
												<p className="text-green-600">
													<DateFormatter
														date={item.createdAt}
													/>
												</p>
											</div>
										</div>
									</div>
								</article>
							))}
					</div>
				)}
			</section>

			<section className="mt-20">
				<div className="bg-gray-900">
					<div className="skew bg-green-500 skew-bottom mr-for-radius">
						<svg
							className="h-8 md:h-12 lg:h-10 w-full text-gray-900"
							viewBox="0 0 10 10"
							preserveAspectRatio="none">
							<polygon
								fill="currentColor"
								points="0 0 10 0 0 10"></polygon>
						</svg>
					</div>
					<div className="skew bg-gray-500  skew-bottom ml-for-radius">
						<svg
							className="h-8 bg-gray-500 md:h-12 lg:h-20 w-full text-gray-900"
							viewBox="0 0 10 10"
							preserveAspectRatio="none">
							<polygon
								fill="currentColor"
								points="0 0 10 0 10 10"></polygon>
						</svg>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PostsList;
