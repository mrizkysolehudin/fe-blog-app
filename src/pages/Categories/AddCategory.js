import { BookOpenIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { createCategoryAction } from "redux/slices/category/categorySlice";
import * as Yup from "yup";

const formSchema = Yup.object({
	title: Yup.string().required("Title is required"),
});

const AddCategory = () => {
	const dispatch = useDispatch();

	const category = useSelector((state) => state.category);
	const { isCreated, loading, appErr, serverErr } = category;

	const formik = useFormik({
		initialValues: {
			title: "",
		},

		onSubmit: (values) => {
			dispatch(createCategoryAction(values));
		},

		validationSchema: formSchema,
	});

	if (isCreated) return <Navigate to="/category-list" />;

	return (
		<div className="bg-gray-100 min-h-screen">
			<main className="max-w-xl mx-auto pt-48">
				<div className="text-center">
					<div className="w-14 mx-auto">
						<BookOpenIcon className="w-12 h-12 text-gray-900 text-center " />
					</div>
					<h3 className="text-3xl font-extrabold mt-5">
						Add New Category
					</h3>
					<p className="text-indigo-600 font-semibold text-sm mt-2">
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

				<form onSubmit={formik.handleSubmit} className="flex flex-col">
					<input
						value={formik?.values?.title}
						onChange={formik.handleChange("title")}
						onBlur={formik.handleBlur("title")}
						type="text"
						placeholder="New category"
						className="border border-gray-300 placeholder:text-gray-500 mt-8 placeholder:text-center py-2 rounded-md px-3"
					/>
					<p className="text-red-600">
						{formik.touched.title && formik.errors.title}
					</p>

					<div>
						{loading ? (
							<button
								disabled
								className="w-full bg-gray-600 py-2 px-3 rounded-md mt-4">
								<PlusCircleIcon className="w-6 h-6 text-orange-400 absolute" />
								<p className="text-white font-medium">
									Loading please wait...
								</p>
							</button>
						) : (
							<button
								type="submit"
								className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 px-3 rounded-md mt-4">
								<PlusCircleIcon className="w-6 h-6 text-orange-400 absolute" />
								<p className="text-white font-medium">
									Add new category
								</p>
							</button>
						)}
					</div>
				</form>
			</main>
		</div>
	);
};

export default AddCategory;
