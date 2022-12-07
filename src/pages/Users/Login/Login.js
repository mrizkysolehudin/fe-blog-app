import React from "react";
import {
	LockClosedIcon,
	LockOpenIcon,
	TrendingUpIcon,
} from "@heroicons/react/outline";

import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { loginUserAction } from "redux/slices/users/usersSlices";
import { Link, Navigate } from "react-router-dom";

const formSchema = Yup.object({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

export default function Login() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			dispatch(loginUserAction(values));
		},
		validationSchema: formSchema,
	});

	// redirect
	const store = useSelector((state) => state?.users);
	const { userAuth, loading, serverErr, appErr } = store;

	if (userAuth) return <Navigate to={`/profile/${userAuth?._id}`} />;

	return (
		<div className="bg-gray-900 min-h-screen">
			<div className=" max-w-5xl mx-auto flex pt-16">
				<section className="w-5/12 bg-white rounded-lg px-12 py-24 flex flex-col justify-center">
					<h3 className="text-2xl font-bold mb-12">
						Login to your Account
					</h3>

					<form onSubmit={formik.handleSubmit}>
						{serverErr || appErr ? (
							<p className="text-red-500">
								{serverErr} - {appErr}
							</p>
						) : (
							""
						)}
						<div className="mb-8">
							<input
								value={formik.values.email}
								onChange={formik.handleChange("email")}
								onBlur={formik.handleBlur("email")}
								type="email"
								placeholder="enter email"
								className="w-full placeholder:font-bold placeholder-gray-300 pl-20 py-2"
							/>
							<LockOpenIcon className="w-6 h-6 relative -mt-8 ml-6 text-gray-500" />
							{/* Err message */}
							<p className="text-red-500 mt-2 ml-6">
								{formik.touched.email && formik.errors.email}
							</p>
						</div>

						<div>
							<input
								value={formik.values.password}
								onChange={formik.handleChange("password")}
								onBlur={formik.handleBlur("password")}
								type="password"
								placeholder="Password"
								className="w-full placeholder:font-bold placeholder-gray-300 pl-20 py-2"
							/>
							<LockClosedIcon className="w-6 h-6 relative -mt-8 ml-6 text-gray-500" />
							{/* err message */}
							<p className="text-red-500 mt-2 ml-6">
								{formik.touched.password &&
									formik.errors.password}
							</p>
						</div>

						<div>
							{loading ? (
								<button
									disabled
									className="bg-blue-500 w-full rounded-full py-4 font-bold text-white mt-10 hover:bg-blue-600">
									Loading...
								</button>
							) : (
								<button
									type="submit"
									className="bg-blue-500 w-full rounded-full py-4 font-bold text-white mt-10 hover:bg-blue-600">
									Login
								</button>
							)}
						</div>
					</form>
					<div className="pt-2">
						<Link
							to="/password-reset-token"
							className="text-blue-800 hover:text-blue-600 font-semibold pl-1">
							Forgot Password?
						</Link>
					</div>
				</section>
				<section className="w-7/12 text-center mt-24 pl-16">
					<div className="w-20 h-20 justify-center flex items-center rounded-lg bg-blue-500 mx-auto mb-12">
						<TrendingUpIcon className="w-12 h-12 text-white" />
					</div>
					<div className="text-gray-300 text-7xl font-bold">
						<h1>Ready to start?</h1>
						<h1>Login Now.</h1>
					</div>
				</section>
			</div>
		</div>
	);
}
