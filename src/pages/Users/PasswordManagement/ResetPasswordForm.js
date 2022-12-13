import { LockClosedIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { passwordResetTokenAction } from "redux/slices/users/usersSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	email: Yup.string().required("Email is required"),
});

export default function ResetPasswordForm() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
		},

		onSubmit: (values) => {
			dispatch(passwordResetTokenAction(values.email));
		},

		validationSchema: formSchema,
	});

	const users = useSelector((state) => state.users);
	const { passwordToken, loading, appErr, serverErr } = users;

	return (
		<div className="bg-gray-100 min-h-screen flex items-center">
			<main className="max-w-3xl mx-auto">
				<div>
					<div className="text-center">
						<h1 className="text-3xl font-extrabold">
							Password Reset Form
						</h1>
						<p className="text-indigo-600 font-medium text-sm mt-2">
							Reset your password if you have forgotten
						</p>

						{appErr ||
							(serverErr && (
								<p className="text-red-600">
									{appErr} {serverErr}
								</p>
							))}
					</div>
				</div>

				{passwordToken && (
					<p className="text-green-700 mt-3 bg-green-100 rounded-md py-1 px-4">
						Email is succesfully sent to your email. Verify it
						within 10 minutes.
					</p>
				)}

				<form
					onSubmit={formik.handleSubmit}
					className="flex flex-col w-full">
					<label htmlFor="email-address" className="sr-only">
						Enter Your Email Address
					</label>
					<input
						value={formik.values.email}
						onChange={formik.handleChange("email")}
						onBlur={formik.handleBlur("email")}
						placeholder="Email address"
						type="email"
						className="w-[480px] border border-gray-300 mt-8 px-4 py-2 rounded-md placeholder:text-gray-700/70 text-sm"
					/>
					<p className="text-red-600 ml-4 text-sm">
						{formik.touched.email && formik.errors.email}
					</p>

					<Link
						to="/update-password"
						className="text-indigo-600 font-medium text-sm mt-5">
						Or Update Your Password?
					</Link>

					{loading ? (
						<button
							disabled
							className="bg-gray-600 mt-6 py-2 px-4 rounded-md text-white font-medium text-sm flex items-center ">
							<span className="w-5/12">
								<LockClosedIcon className="w-6 h-6 text-indigo-400" />
							</span>
							<p>Loading please wait...</p>
						</button>
					) : (
						<button
							type="submit"
							className="bg-indigo-600 hover:bg-indigo-700 mt-6 py-2 px-4 rounded-md text-white font-medium text-sm flex items-center ">
							<span className="w-5/12">
								<LockClosedIcon className="w-6 h-6 text-indigo-400" />
							</span>
							<p>Reset Password</p>
						</button>
					)}
				</form>
			</main>
		</div>
	);
}
