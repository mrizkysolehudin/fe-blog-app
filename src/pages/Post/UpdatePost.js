import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
	fetchPostDetailsAction,
	updatePostAction,
} from "redux/slices/posts/postSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	tittle: Yup.string().required("Title is required"),
	description: Yup.string().required("Description is required"),
	category: Yup.string().required("Category is required"),
});

const UpdateComment = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPostDetailsAction(id));
	}, [dispatch, id]);

	const post = useSelector((state) => state.post);
	const { postDetails, isUpdated, loading, appErr, serverErr } = post;

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			title: postDetails?.title,
			description: postDetails?.description,
			category: "",
		},

		onSubmit: (values) => {
			const data = {
				title: values.title,
				description: values.description,
				id,
			};
			dispatch(updatePostAction(data));
		},

		validationSchema: formSchema,
	});

	if (isUpdated) return <Navigate to={"/posts"} />;

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="pt-28">
				<div className="text-center mb-7">
					<h1 className="text-gray-300 text-3xl font-extrabold">
						Are you sure you want to edit?
					</h1>
					<h1 className="text-green-300 text-3xl font-extrabold">
						{postDetails?.title}
					</h1>

					<div>
						{appErr || serverErr ? (
							<h1 className="text-red-500 text-xl text-center">
								{appErr} {serverErr}
							</h1>
						) : null}
					</div>
				</div>

				<div className="bg-white max-w-md mx-auto rounded-lg py-7 px-10">
					<form>
						<div className="flex flex-col">
							<label className="text-gray-800 font-medium text-sm mb-1">
								Title
							</label>
							<input
								id="title"
								name="title"
								type="title"
								autoComplete="title"
								onBlur={formik.handleBlur("title")}
								value={formik.values.title}
								onChange={formik.handleChange("title")}
								className="border border-gray-300 rounded px-3 pt-1 pb-2 "
							/>

							<div>
								<p className="text-red-500">
									{formik.touched.title &&
										formik.errors.title}
								</p>
							</div>
						</div>

						<div className="flex flex-col mt-4">
							<select className="border  border-gray-300 rounded pt-1 pb-1 px-2">
								<option value="apa">Select...</option>
								<option value="apa">apa</option>
								<option value="ya">ya</option>
							</select>
						</div>

						<div className="pt-6 flex flex-col">
							<label className="text-sm text-gray-700 font-semibold">
								Description
							</label>
							<textarea
								rows="5"
								cols="10"
								onBlur={formik.handleBlur("description")}
								value={formik.values.description}
								onChange={formik.handleChange("decription")}
								type="text"
								className="border border-gray-300 rounded"></textarea>

							<div>
								<p className="text-red-500">
									{formik.touched.description &&
										formik.errors.description}
								</p>
							</div>
						</div>

						<button
							disabled={loading}
							className={` ${
								loading
									? "bg-gray-500"
									: "bg-indigo-600 hover:bg-indigo-700"
							}  w-full rounded-md py-2 text-white font-semibold mt-6 text-sm`}>
							{loading ? "Loading please wait..." : "Update"}
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default UpdateComment;
