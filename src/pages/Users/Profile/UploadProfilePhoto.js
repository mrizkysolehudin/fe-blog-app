import { UploadIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { uploadProfilePhototAction } from "redux/slices/users/usersSlices";
import styled from "styled-components";
import * as Yup from "yup";
import Dropzone from "react-dropzone";

const formSchema = Yup.object({
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
	outline: none;
	transition: border 0.24s ease-in-out;
`;

const UploadProfilePhoto = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			image: "",
		},

		onSubmit: (values) => {
			dispatch(uploadProfilePhototAction(values));
		},

		validationSchema: formSchema,
	});

	const user = useSelector((state) => state.users);
	const { profilePhoto, loading, appErr, serverErr, userAuth } = user;

	if (profilePhoto) return <Navigate to={`/profile/${userAuth._id}`} />;

	return (
		<div className="bg-gray-900 min-h-screen">
			<h1 className="text-gray-300 font-extrabold text-3xl text-center pt-44 pb-8">
				Upload profile photo
			</h1>

			<div className="bg-white max-w-lg mx-auto px-12 py-9 rounded-lg">
				<form onSubmit={formik.handleSubmit}>
					{appErr || serverErr ? (
						<p>
							{appErr} {serverErr}
						</p>
					) : (
						<div>
							<Container>
								<Dropzone
									onBlur={formik.handleBlur("image")}
									accept={"image/jpeg, image/png"}
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

							<p className="text-red-500">
								{formik.touched.image && formik.errors.image}
							</p>

							<p className="pt-6 text-sm text-gray-500 pb-5">
								PNG, JPG, GIF minimum size 400kb uploaded only 1
								image
							</p>

							{loading ? (
								<button className="flex border-2 border-gray-200 w-full justify-center py-[6px] rounded-md">
									<UploadIcon className="w-6 h-6 text-gray-400" />
									<p className="text-gray-800 font-medium text-sm pl-2">
										Loading please wait...
									</p>
								</button>
							) : (
								<button
									type="submit"
									className="flex border-2 border-gray-200 w-full justify-center py-[6px] rounded-md">
									<UploadIcon className="w-6 h-6 text-gray-400" />
									<p className="text-gray-800 font-medium text-sm pl-2">
										Upload Photo
									</p>
								</button>
							)}
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default UploadProfilePhoto;
