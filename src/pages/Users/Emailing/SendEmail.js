import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { sendMailAction } from "redux/slices/email/emailSlices";
import * as Yup from "yup";

const formSchema = Yup.object({
	recipientEmail: Yup.string().required("Recipiect Email is required"),
	subject: Yup.string().required("Subject is required"),
	message: Yup.string().required("Message is required"),
});

const SendEmail = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { state } = location;
	// cara lain
	// const [form, setForm] = useState({
	// 	recipientEmail: location.state.email,
	// 	id: location.state.id,
	// });

	const formik = useFormik({
		initialValues: {
			recipientEmail: state?.email,
			subject: "",
			message: "",
		},

		onSubmit: (values) => {
			dispatch(sendMailAction(values));
		},

		validationSchema: formSchema,
	});

	const sendMail = useSelector((state) => state.sendMail);
	const { loading, appErr, serverErr, isMailSent } = sendMail;

	if (isMailSent) return <Navigate to={`/profile/${state?.id}`} />;

	return (
		<div className="bg-gray-900 min-h-screen pb-12">
			<div>
				<h1 className="text-gray-300 text-3xl font-extrabold text-center pt-20 pb-10">
					Send Message
					<span className="text-green-300">email title</span>
				</h1>
				{appErr ||
					(serverErr && (
						<p className="text-red-500 text-center mt-4">
							{appErr} {serverErr}
						</p>
					))}
			</div>

			<div className="bg-white max-w-md mx-auto h-fit py-6 px-10 rounded-md">
				<form onSubmit={formik.handleSubmit}>
					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Recipient Email
						</label>
						<input
							disabled
							type="email"
							value={formik.values?.recipientEmail}
							className="bg-gray-200 rounded-md px-3 py-2 text-sm"
						/>
					</div>

					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Subject
						</label>
						<input
							onBlur={formik.handleBlur("subject")}
							value={formik.values.subject}
							onChange={formik.handleChange("subject")}
							type="text"
							className="border-[1.5px] border-gray-200 rounded-md px-3 py-2 text-sm"
						/>

						<p className="text-red-500">
							{formik.touched.subject && formik.errors.subject}
						</p>
					</div>

					<div className="flex flex-col mb-6">
						<label className="text-gray-800 font-medium text-sm mb-1">
							Message
						</label>
						<textarea
							cols="30"
							rows="5"
							type="text"
							onBlur={formik.handleBlur("message")}
							value={formik.values.message}
							onChange={formik.handleChange("message")}
							className="border-gray-300 border rounded-md text-sm p-4"></textarea>

						<p className="text-red-500">
							{formik.touched.message && formik.errors.message}
						</p>
					</div>
					{loading ? (
						<button
							type="submit"
							className="bg-gray-600 w-full rounded-md text-white font-semibold text-sm py-2 mb-3 ">
							Loading please wait...
						</button>
					) : (
						<button
							type="submit"
							className="bg-indigo-600 w-full rounded-md text-white font-semibold text-sm py-2 mb-3 hover:bg-indigo-700">
							Send
						</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default SendEmail;
