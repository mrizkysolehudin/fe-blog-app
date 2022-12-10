import React, { useEffect } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
	deletePostAction,
	fetchPostDetailsAction,
} from "redux/slices/posts/postSlices";
import { Link, useParams } from "react-router-dom";
import DateFormatter from "utils/DateFormatter";
import LoadingComponent from "utils/LoadingComponent";
import CommentsList from "components/Comments/CommentsList";
import AddComment from "components/Comments/AddComment";

const PostDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const post = useSelector((state) => state.post);
	const { appErr, serverErr, postDetails, loading } = post;

	const comment = useSelector((state) => state.comment);
	const { commentCreated, commentDeleted } = comment;

	const user = useSelector((state) => state.users);
	const { userAuth } = user;

	useEffect(() => {
		dispatch(fetchPostDetailsAction(id));
	}, [dispatch, id, commentCreated, commentDeleted]);

	return (
		<>
			{loading ? (
				<div className="bg-gray-800 min-h-screen">
					<LoadingComponent />
				</div>
			) : appErr || serverErr ? (
				<div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-red-400 text-xl">
					{appErr} {serverErr}
				</div>
			) : (
				<div className="bg-gray-800 min-h-screen">
					<section className="px-4 pt-16">
						<img
							className="object-cover w-full h-96"
							src={postDetails?.image}
							alt=""
						/>
					</section>
					<section className="max-w-lg mx-auto pt-24 pl-7">
						\
						<div className="flex justify-center">
							<h1 className="text-white text-6xl border-b-[0.5px] border-gray-300/60 pb-12 w-fit px-5 font-bold">
								{postDetails?.title}
							</h1>
						</div>
						<div className="pt-16 flex justify-center">
							<img
								src={postDetails?.user.profilePhoto}
								className="w-24 h-24 rounded-full"
								alt={
									postDetails?.user.firstName +
									" " +
									postDetails?.user.lastName
								}
							/>

							<div className="ml-9 mt-5">
								<p className="text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
									{postDetails?.user.firstName +
										" " +
										postDetails?.user.lastName}
								</p>
								<p className="text-gray-200/30">
									<DateFormatter
										date={postDetails?.createdAt}
									/>
								</p>
							</div>
						</div>
					</section>
					<div className="text-start max-w-xl mx-auto mt-16">
						<p className="text-gray-200 text-xl">
							{postDetails?.description}
						</p>

						<div className="flex mt-5">
							<Link to={`/update-post/${postDetails?._id}`}>
								<PencilAltIcon className="w-10 h-10 text-yellow-300 ml-4 mr-7" />
							</Link>
							<button
								onClick={() =>
									dispatch(deletePostAction(postDetails?.id))
								}>
								<TrashIcon className="w-10 h-10 text-red-700" />
							</button>
						</div>
					</div>

					<div>
						{userAuth ? <AddComment postId={id} /> : null}
						<CommentsList comments={postDetails?.comments} />
					</div>
				</div>
			)}
		</>
	);
};

export default PostDetails;
