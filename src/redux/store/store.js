import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "redux/slices/users/usersSlices";
import categoriesReducer from "redux/slices/category/categorySlice";
import post from "redux/slices/posts/postSlices";

const store = configureStore({
	reducer: {
		users: usersReducer,
		category: categoriesReducer,
		post,
	},
});

export default store;
