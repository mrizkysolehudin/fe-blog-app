import { LockClosedIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updatePasswordAction } from "redux/slices/users/usersSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	password: Yup.string().required("Password is required"),
});

const UpdateePassword = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			password: "",
		},

		onSubmit: (values) => {
			dispatch(updatePasswordAction(values?.password));
		},

		validationSchema: formSchema,
	});

	const users = useSelector((state) => state.users);
	const { isPasswordUpdated, loading, appErr, serverErr, userAuth } = users;

	if (isPasswordUpdated) return <Navigate to={`/profile/${userAuth._id}`} />;

	return (
		<div className="bg-gray-700 min-h-screen flex items-center justify-center">
			<div>
				<div>
					<h1 className="text-gray-300 font-extrabold text-3xl text-center mb-10">
						Change your password
					</h1>

					{appErr ||
						(serverErr && (
							<p className="text-red-600 text-center">
								{appErr} {serverErr}
							</p>
						))}
				</div>

				<div className="bg-white py-9 px-10 rounded-xl">
					<form onSubmit={formik.handleSubmit}>
						<div className="flex items-center ml-6">
							<LockClosedIcon className="w-6 h-6 text-gray-700 mr-4" />
							<input
								value={formik.values.password}
								onChange={formik.handleChange("password")}
								onBlur={formik.handleBlur("password")}
								type="passsword"
								placeholder="Password"
								className="rounded-r-full border-2 border-gray-300 py-4 px-6 w-80 placeholder:font-bold placeholder:text-gray-300"
							/>
						</div>
						<div>
							<p className="text-red-400 ml-7">
								{formik.touched.password &&
									formik.errors.password}
							</p>

							{loading ? (
								<button
									disabled
									className="bg-indigo-700 w-full text-white text-sm font-semibold py-2 rounded-md mt-5 hover:bg-gray-800">
									Loading please wait...
								</button>
							) : (
								<button
									type="submit"
									className="bg-indigo-700 w-full text-white text-sm font-semibold py-2 rounded-md mt-5 hover:bg-gray-800">
									Update Password
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateePassword;
