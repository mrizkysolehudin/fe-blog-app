import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { deleteCommentAction } from "redux/slices/comments/commentSlices";
import { useDispatch, useSelector } from "react-redux";

const CommentsList = ({ comments }) => {
	const dispatch = useDispatch();

	const user = useSelector((state) => state.users);
	const { userAuth } = user;
	const isLoginUser = userAuth?._id;

	return (
		<section className="ml-8 mt-6 pb-20">
			<div className="max-w-sm mx-auto text-center bg-gray-200/20 py-3 rounded-sm">
				<p className="border-b-[1.2px] border-white mx-3 text-start text-gray-400">
					{comments?.length > 1
						? comments?.length + " comments"
						: comments?.length + " comment"}
				</p>
				{comments?.length === 0 ? (
					<p className="text-lg text-yellow-500">No comment</p>
				) : (
					comments?.map((comment, index) => (
						<article key={index}>
							<div className="mx-3 mt-3 flex">
								<img
									src={comment?.user?.profilePhoto}
									alt=""
									className="w-6 h-6 rounded-full"
								/>
								<div className="text-start flex justify-between w-full ml-3  mt-[3px]">
									<div className="text-[13px]">
										<p className="text-green-400 font-medium mb-1">
											{comment?.user?.firstName}{" "}
											{comment?.user?.lastName}
										</p>
										<p className="text-gray-400">
											{comment?.description}
										</p>
									</div>
									<p className="text-yellow-600 text-sm font-medium">
										<Moment fromNow>
											{comment?.createdAt}
										</Moment>
									</p>
								</div>
							</div>

							{isLoginUser === comment?.user?._id ? (
								<div className="flex mx-14 mt-6 mb-6 gap-x-5">
									<Link
										to={`/update-comment/${comment?._id}`}>
										<PencilAltIcon className="w-[18px] h-[18px] text-yellow-300" />
									</Link>
									<button
										onClick={() =>
											dispatch(
												deleteCommentAction(
													comment?._id
												)
											)
										}>
										<TrashIcon className="w-[18px] h-[18px] text-red-600" />
									</button>
								</div>
							) : null}
						</article>
					))
				)}
			</div>
		</section>
	);
};

export default CommentsList;
