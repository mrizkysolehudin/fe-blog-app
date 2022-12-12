import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
	fetchUserDetailsAction,
	updateUserAction,
} from "redux/slices/users/usersSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	firstName: Yup.string().required("FirstName is required"),
	lastName: Yup.string().required("LastName is required"),
	email: Yup.string().required("Email is required"),
	bio: Yup.string().required("Bio is required"),
});

const UpdateProfileForm = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserDetailsAction(id));
	}, [dispatch, id]);

	const user = useSelector((state) => state.users);
	const { userDetails, isUpdated, appErr, serverErr, loading } = user;

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: userDetails?.firstName,
			lastName: userDetails?.lastName,
			email: userDetails?.email,
			bio: userDetails?.bio,
		},

		onSubmit: (values) => {
			const data = {
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				bio: values.bio,
				id,
			};
			dispatch(updateUserAction(data));
		},

		validationSchema: formSchema,
	});

	console.log("user");
	console.log(user);

	if (isUpdated) return <Navigate to={`/profile/${userDetails._id}`} />;

	return (
		<div className="bg-gray-900 min-h-screen pb-10">
			<section>
				<div>
					<h1 className="text-2xl text-gray-300 font-extrabold text-center pt-20 mb-9">
						Hei buddy{" "}
						<span className="text-green-300">lucif chrollo</span>,
						Do you want to <br /> update your profile?
					</h1>
					{appErr || serverErr ? (
						<p className="text-red-500 mt-4 text-2xl">
							{appErr} {serverErr}
						</p>
					) : null}
				</div>

				<div className="bg-white max-w-lg mx-auto px-10 py-9 rounded-xl">
					<form onSubmit={formik.handleSubmit}>
						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								First Name
							</label>
							<input
								name="firstName"
								onBlur={formik.handleBlur("firstName")}
								value={formik.values.firstName}
								onChange={formik.handleChange("firstName")}
								type="text"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">
								{formik.touched.firstName &&
									formik.errors.firstName}
							</p>
						</div>

						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								Last Name
							</label>
							<input
								onBlur={formik.handleBlur("lastName")}
								value={formik.values.lastName}
								onChange={formik.handleChange("lastName")}
								type="text"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">
								{formik.touched.lastName &&
									formik.errors.lastName}
							</p>
						</div>

						<div className="mb-5">
							<label className="text-sm text-gray-800 font-semibold">
								Email
							</label>
							<input
								onBlur={formik.handleBlur("email")}
								value={formik.values.email}
								onChange={formik.handleChange("email")}
								type="email"
								className="w-full text-sm border-black/20 border rounded-md justify-center flex items-center h-fit py-2 px-3 mt-1 "
							/>
							<p className="text-red-500">
								{formik.touched.email && formik.errors.email}
							</p>
						</div>

						<div className="mb-5 flex flex-col">
							<label className="text-sm text-gray-800 font-semibold mb-1">
								Bio
							</label>
							<textarea
								cols="30"
								rows="6"
								onBlur={formik.handleBlur("bio")}
								value={formik.values.bio}
								onChange={formik.handleChange("bio")}
								type="text"
								className="border-black/20 border"></textarea>
						</div>

						<div className="border-gray-600/20 border-b-[0.5px] mb-2">
							{loading ? (
								<button
									disabled
									className="bg-gray-600 w-full py-2 rounded-md text-white font-semibold text-sm mb-4 ">
									Loading please wait...
								</button>
							) : (
								<button
									type="submit"
									className="bg-indigo-600 w-full py-2 rounded-md text-white font-semibold text-sm mb-4 hover:bg-indigo-700">
									Update
								</button>
							)}
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default UpdateProfileForm;
