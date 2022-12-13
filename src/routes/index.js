import React from "react";
import { Route, Routes } from "react-router-dom";

import GuestRoute from "components/GuestRoute/GuestRoute";
import Navbar from "components/Navigation/Navbar";

import HomePage from "pages/HomePage/HomePage";
import CreatePost from "pages/Post/CreatePost";
import PostsList from "pages/Post/PostsList";
import Register from "pages/Users/Register/Register";
import Login from "pages/Users/Login/Login";
import Profile from "pages/Users/Profile/Profile";
import PostDetails from "pages/Post/PostDetails";
import UpdatePassword from "pages/Users/PasswordManagement/UpdatePassword";
import UpdateProfileForm from "pages/Users/Profile/UpdateProfileForm";
import SendEmail from "pages/Users/Emailing/SendEmail";
import UploadProfilePhoto from "pages/Users/Profile/UploadProfilePhoto";
import UpdatePost from "pages/Post/UpdatePost";
import UpdateComment from "components/Comments/UpdateComment";
import AccountVerified from "pages/Users/AccountVerification/AccountVerified";

function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<GuestRoute />
					</>
				}>
				<Route path="" element={<HomePage />} />
				<Route path="/posts" element={<PostsList />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				<Route path="/create-post" element={<CreatePost />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/posts/:id" element={<PostDetails />} />
				<Route path="/update-password" element={<UpdatePassword />} />
				<Route
					path="/update-profile/:id"
					element={<UpdateProfileForm />}
				/>
				<Route path="/send-email" element={<SendEmail />} />
				<Route
					path="/upload-profile-photo"
					element={<UploadProfilePhoto />}
				/>
				<Route path="/update-post/:id" element={<UpdatePost />} />
				<Route path="/update-comment/:id" element={<UpdateComment />} />
				<Route
					path="/verify-account/:token"
					element={<AccountVerified />}
				/>
			</Route>
		</Routes>
	);
}

export default AppRoutes;
