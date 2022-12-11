import CategoryDropDown from "components/Categories/CategoryDropDown";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { createPostAction } from "redux/slices/posts/postSlices";
import styled from "styled-components";
import * as Yup from "yup";
import Dropzone from "react-dropzone";

const formSchema = Yup.object({
	title: Yup.string().required("Title is required"),
	description: Yup.string().required("Description is required"),
	category: Yup.object().required("Category is required"),
	image: Yup.string().required("Image is required"),
});

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-width: 2px;
border-radius: 2px;
border-style: dashed;
background-color: #fafafa;
color: #bdbdbd;
border-color:'red'
transition: border 0.24s ease-in-out;
`;

function CreatePost() {
	const dispatch = useDispatch();

	const post = useSelector((state) => state.post);
	const { isCreated, loading, appErr, serverErr } = post;

	const formik = useFormik({
		initialValues: {
			title: "",
			category: "",
			description: "",
			image: "",
		},

		onSubmit: (values) => {
			const data = {
				title: values?.title,
				category: values?.category?.label,
				description: values?.description,
				image: values?.image,
			};
			dispatch(createPostAction(data));
		},

		validationSchema: formSchema,
	});

	if (isCreated) return <Navigate to={"/posts"} />;

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="max-w-md w-full mx-auto pt-14 text-center">
				<h1 className="text-3xl font-extrabold text-gray-300 mb-2">
					Create Post
				</h1>
				<p className="text-green-600 text-sm">
					Share your ideas to the word. Your post must be free from
					profanity
				</p>

				{appErr || serverErr ? (
					<p className="mt-2 text-lg text-red-600 bg-red-300 rounded-lg">
						{appErr} {serverErr}
					</p>
				) : null}
			</section>

			<section className="bg-white max-w-lg mx-auto mt-8 rounded-lg py-8 px-2">
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-col max-w-sm mx-auto">
						<label htmlFor="title" className="text-sm">
							Title
						</label>
						<input
							value={formik?.values?.title}
							onChange={formik.handleChange("title")}
							onBlur={formik.handleBlur("title")}
							name="title"
							type="text"
							placeholder="masukkan judul"
							className="border border-gray-300 rounded-md px-4 py-2 mt-2 "
						/>

						<div>
							<p className="text-red-600">
								{formik?.touched?.title &&
									formik?.errors?.title}
							</p>
						</div>

						<label htmlFor="category" className="text-sm mt-4">
							Select Category
						</label>
						<CategoryDropDown
							value={formik.values.category?.label}
							onChange={formik.setFieldValue}
							onBlur={formik.setFieldTouched}
							error={formik.errors.category}
							touched={formik.touched.category}
						/>
					</div>

					<div className="flex flex-col max-w-sm mx-auto mt-5">
						<label htmlFor="description" className="text-sm">
							Description
						</label>
						<textarea
							value={formik.values.description}
							onChange={formik.handleChange("description")}
							onBlur={formik.handleBlur("description")}
							type="text"
							name="description"
							id="description"
							cols="4"
							rows="5"
							className="border border-gray-300 rounded-md px-4 py-2 mt-2"></textarea>

						<p className="text-red-500 ">
							{formik?.touched?.description &&
								formik?.errors?.description}
						</p>

						<label htmlFor="image" className="mt-4">
							Select image to upload
						</label>
						<Container className="mt-2 mb-4">
							<Dropzone
								onBlur={formik.handleBlur("image")}
								accept="image/jpeg, image/png"
								onDrop={(acceptedFiles) => {
									formik.setFieldValue(
										"image",
										acceptedFiles[0]
									);
								}}>
								{({ getRootProps, getInputProps }) => (
									<div className="container">
										<div
											{...getRootProps({
												className: "dropzone",
												onDrop: (event) =>
													event.stopPropagation(),
											})}>
											<input {...getInputProps()} />
											<p className="text-gray-300 text-lg cursor-pointer hover:text-gray-500">
												Click here to select image
											</p>
										</div>
									</div>
								)}
							</Dropzone>
						</Container>
					</div>

					<div className="max-w-sm mx-auto">
						{loading ? (
							<button
								type="submit"
								className="bg-gray-600 w-full py-2 rounded-md font-bold text-white">
								Loading please wait...
							</button>
						) : (
							<button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-bold text-white">
								Create
							</button>
						)}
					</div>
				</form>
			</section>
		</div>
	);
}

export default CreatePost;
