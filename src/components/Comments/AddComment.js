import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "redux/slices/comments/commentSlices";

const formSchema = Yup.object({
	description: Yup.string().required("Description is required"),
});

const AddComment = ({ postId }) => {
	const dispatch = useDispatch();
	const comment = useSelector((state) => state.comment);
	const { loading, appErr, serverErr } = comment;

	const formik = useFormik({
		initialValues: {
			description: "",
		},

		onSubmit: (values) => {
			const data = {
				postId,
				description: values?.description,
			};

			dispatch(createCommentAction(data));
		},

		validationSchema: formSchema,
	});

	return (
		<div className=" max-w-xl mx-auto flex justify-center mt-5">
			{serverErr || appErr ? (
				<p className="text-center ml-6 text-red-400 pt-2">
					{serverErr} {appErr}
				</p>
			) : null}
			<form onSubmit={formik.handleSubmit}>
				<input
					onBlur={formik.handleBlur("description")}
					value={formik?.value?.description}
					onChange={formik.handleChange("description")}
					name="text"
					type="text"
					id="text"
					placeholder="Add new comment"
					className="pt-1 pb-2 px-2 rounded-md placeholder:text-sm"
				/>

				{loading ? (
					<button className="bg-gray-600 text-sm text-white font-semibold py-2 px-2 rounded-md ml-2">
						Loading please wait...
					</button>
				) : (
					<button
						type="submit"
						className="bg-indigo-600 text-sm text-white font-semibold py-2 px-2 rounded-md ml-2">
						Submit
					</button>
				)}
				<div className="text-center ml-6 text-red-400 pt-2">
					{formik.touched.description && formik.errors.description}
				</div>
			</form>
		</div>
	);
};

export default AddComment;
