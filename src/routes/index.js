import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoute from "components/Navigation/PublicRoute/PublicRoute";
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
import ResetPasswordForm from "pages/Users/PasswordManagement/ResetPasswordForm";
import PrivateRoute from "components/Navigation/ProtectedRoutes/PrivateRoute";
import AddCategory from "pages/Categories/AddCategory";
import { UpdateCategory } from "pages/Categories/UpdateCategory";
import CategoryList from "pages/Categories/CategoryList";
import UsersList from "pages/Users/UsersList/UsersList";

function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<PublicRoute />
					</>
				}>
				<Route path="" element={<HomePage />} />
				<Route path="/posts" element={<PostsList />} />
				<Route path="/posts/:id" element={<PostDetails />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/password-reset-token"
					element={<ResetPasswordForm />}
				/>
			</Route>

			{/* Private Route */}
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<PrivateRoute />
					</>
				}>
				<Route path="/create-post" element={<CreatePost />} />
				<Route path="/profile/:id" element={<Profile />} />
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
				<Route path="/add-category" element={<AddCategory />} />
				<Route
					path="/update-category/:id"
					element={<UpdateCategory />}
				/>
				<Route path="/category-list" element={<CategoryList />} />
				<Route path="/users" element={<UsersList />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
