import React from "react";
import { Route, Routes } from "react-router-dom";

import GuestRoute from "components/GuestRoute/GuestRoute";
import Navbar from "components/Navigation/Navbar";

import HomePage from "pages/HomePage/HomePage";
import CreatePost from "pages/Post/CreatePost";
import PostsList from "pages/Post/PostsList";
import Register from "pages/Users/Register/Register";
import Login from "pages/Users/Login/Login";
import Profile from "pages/Profile/Profile";
import PostDetails from "pages/Post/PostDetails";

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
			</Route>
		</Routes>
	);
}

export default AppRoutes;
