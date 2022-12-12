import { LockOpenIcon, UserAddIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { registerUserAction } from "redux/slices/users/usersSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	firstName: Yup.string().required("FirstName is required"),
	lastName: Yup.string().required("LastName is required"),
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

function Register() {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},

		onSubmit: (values) => {
			dispatch(registerUserAction(values));
		},

		validationSchema: formSchema,
	});

	const user = useSelector((state) => state.users);
	const { loading, appErr, serverErr, registered } = user;

	if (registered) return <Navigate to="/login" />;

	return (
		<div className="bg-gray-800 min-h-screen">
			<div className="flex max-w-5xl mx-auto gap-x-16">
				<section className="w-6/12 h-[400px] mt-60">
					<p className="text-blue-400 font-bold text-lg mb-8">
						Register Account
					</p>
					<h1 className="text-white text-5xl font-bold">
						Create an account <br />
						and start pending <br />
						down your ideas
					</h1>
				</section>
				<section className="w-6/12">
					<div className="bg-gray-600 h-auto rounded-lg py-20 mt-16 px-16 mb-16">
						{appErr ||
							(serverErr && (
								<p className="text-red-500 my-10">
									{appErr} {serverErr}
								</p>
							))}

						<form onSubmit={formik.handleSubmit}>
							<h3 className="text-white text-2xl font-bold mb-4">
								Register Account
							</h3>

							<div className="mt-7">
								<input
									value={formik.values.firstName}
									onChange={formik.handleChange("firstName")}
									onBlur={formik.handleBlur("firstName")}
									type="text"
									name="firstName"
									placeholder="First Name"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />
								<p className="mt-4 text-red-500 ml-3">
									{formik.touched.firstName &&
										formik.errors.firstName}
								</p>
							</div>

							<div className="mt-7">
								<input
									value={formik.values.lastName}
									onChange={formik.handleChange("lastName")}
									onBlur={formik.handleBlur("lastName")}
									type="text"
									name="lastName"
									placeholder="Last Name"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />

								<p className="mt-4 text-red-500 ml-3">
									{formik.touched.lastName &&
										formik.errors.lastName}
								</p>
							</div>

							<div className="mt-7">
								<input
									value={formik.values.email}
									onChange={formik.handleChange("email")}
									onBlur={formik.handleBlur("email")}
									type="email"
									name="email"
									placeholder="example@gmail.com"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<UserAddIcon className="w-5 h-5 relative -mt-9 ml-7" />

								<p className="mt-4 text-red-500 ml-3">
									{formik.touched.email &&
										formik.errors.email}
								</p>
							</div>

							<div className="mt-7">
								<input
									value={formik.values.password}
									onChange={formik.handleChange("password")}
									onBlur={formik.handleBlur("password")}
									type="password"
									name="password"
									placeholder="Password"
									className="w-full rounded-full text-sm font-bold py-4 placeholder-gray-300 px-20"
								/>
								<LockOpenIcon className="w-5 h-5 relative -mt-9 ml-7" />

								<p className="mt-4 text-red-500 ml-3">
									{formik.touched.password &&
										formik.errors.password}
								</p>
							</div>

							<div className="mt-7">
								{loading ? (
									<button
										disabled
										className="w-full rounded-full bg-gray-500 text-white font-bold py-4 ">
										Loading please wait...
									</button>
								) : (
									<button
										type="submit"
										className="w-full rounded-full bg-blue-500 text-white font-bold py-4 hover:bg-blue-600">
										Register
									</button>
								)}
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Register;
