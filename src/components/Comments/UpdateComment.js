import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
	fetchCommentAction,
	updateCommentAction,
} from "redux/slices/comments/commentSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	description: Yup.string().required("Description is required"),
});

function UpdateComment() {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCommentAction(id));
	}, [dispatch, id]);

	const comment = useSelector((state) => state.comment);
	const { commentDetails, loading, isUpdate } = comment;

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			description: commentDetails?.description,
		},

		onSubmit: (values) => {
			const data = {
				description: values.description,
				id,
			};
			dispatch(updateCommentAction(data));
		},

		validationSchema: formSchema,
	});

	if (isUpdate) return <Navigate to={`/posts/${commentDetails.post}`} />;

	return (
		<div className="bg-gray-900 min-h-screen pt-44">
			<div className="max-w-xs mx-auto flex gap-x-4 pt-10">
				<textarea
					cols="30"
					rows="5"
					onBlur={formik.handleBlur("description")}
					value={formik.values.description}
					onChange={formik.handleChange("description")}
					type="text"
					placeholder="Update comment"
					className="border-2 border-gray-300 rounded-lg"></textarea>

				<div className="flex flex-col justify-center">
					{loading ? (
						<button
							disabled
							className="bg-gray-600 text-white text-sm py-3 px-5 rounded-md w-fit">
							Loading please wait...
						</button>
					) : (
						<button
							onClick={formik.handleSubmit}
							className="bg-indigo-600 text-white hover:bg-indigo-700 text-sm py-3 px-5 rounded-md">
							Submit
						</button>
					)}
				</div>
			</div>

			<p className="text-center bg-red-400 max-w-xs flex justify-center mx-auto mt-5 rounded text-red-800 font-semibold">
				{formik.touched.description && formik.errors.description}
			</p>
		</div>
	);
}

export default UpdateComment;
