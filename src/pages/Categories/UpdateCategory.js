import { BookOpenIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
	deleteCategoriesAction,
	fetchCategoryAction,
	updateCategoriesAction,
} from "redux/slices/category/categorySlice";
import * as Yup from "yup";

const formSchema = Yup.object({
	title: Yup.string().required("Title is required"),
});

export const UpdateCategory = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoryAction(id));
	}, [dispatch, id]);

	const category = useSelector((state) => state.category);
	const { isEdited, isDeleted, loading, appErr, serverErr } = category;

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			title: category?.category?.title,
		},

		onSubmit: (values) => {
			dispatch(updateCategoriesAction({ title: values?.title, id }));
		},

		validationSchema: formSchema,
	});

	if (isEdited || isDeleted) return <Navigate to="/category-list" />;

	return (
		<div className="bg-gray-100 min-h-screen">
			<main className="max-w-md mx-auto text-center pt-44">
				<div>
					<div className="w-12 mx-auto">
						<BookOpenIcon className="w-12 h-12" />
					</div>
					<h1 className="text-3xl font-extrabold mt-5">
						Update Category
					</h1>
					<p className="mt-2 text-indigo-600 font-medium text-sm">
						These are the categories user will select when creating
						a post
					</p>

					{appErr ||
						(serverErr && (
							<p className="text-red-600 mt-20">
								{appErr} {serverErr}
							</p>
						))}
				</div>

				<form onSubmit={formik.handleSubmit} className="mt-8">
					<input
						value={formik?.values?.title}
						onChange={formik.handleChange("title")}
						onBlur={formik.handleBlur("title")}
						type="text"
						autoComplete="text"
						placeholder="New Category"
						className="border border-gray-300 w-full py-2 text-center placeholder:text-center px-3 rounded-md"
					/>

					<p className="text-red-600 text-start">
						{formik.touched.title && formik.errors.title}
					</p>

					{loading ? (
						<div className="mt-6  w-full py-2 px-2 bg-gray-400 rounded-md">
							<PlusCircleIcon className="w-6 h-6 text-yellow-400/70 absolute" />
							<button
								disabled
								className="text-white font-medium text-sm">
								Loading please wait...
							</button>
						</div>
					) : (
						<button
							type="submit"
							className="mt-6  w-full py-2 px-2 bg-orange-400 hover:bg-indigo-700 rounded-md">
							<PlusCircleIcon className="w-6 h-6 text-yellow-400/70 absolute" />
							<div className="text-white font-medium text-sm">
								Update Category
							</div>
						</button>
					)}

					<div>
						{loading ? (
							<button
								disabled
								className="mt-2  w-full py-2 px-2 bg-gray-400  rounded-md text-white font-medium text-sm">
								Loading please wait...
							</button>
						) : (
							<button
								onClick={() =>
									dispatch(deleteCategoriesAction(id))
								}
								className="mt-2  w-full py-2 px-2 bg-red-600 hover:bg-indigo-700 rounded-md text-white font-medium text-sm">
								Delete Category
							</button>
						)}
					</div>
				</form>
			</main>
		</div>
	);
};
