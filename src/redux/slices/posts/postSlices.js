import axios from "axios";
import baseUrl from "utils/baseURL";

const {
	createAction,
	createAsyncThunk,
	createSlice,
} = require("@reduxjs/toolkit");

// beda src
// action to redirect
const resetPost = createAction("post/category/reset");
const resetPostEdit = createAction("post/edit-reset");
const resetPostDelete = createAction("post/delete-reset");

export const createPostAction = createAsyncThunk(
	"post/created",
	async (post, { rejectWithValue, getState, dispatch }) => {
		const user = getState()?.users;
		const { userAuth } = user;

		const config = {
			headers: {
				Authorization: `Bearer ${userAuth.token}`,
			},
		};

		// http call
		try {
			const formData = new FormData();
			formData.append("title", post?.title);
			formData.append("description", post?.description);
			formData.append("category", post?.category);
			formData.append("image", post?.image);

			const { data } = await axios.post(
				`${baseUrl}/api/posts`,
				formData,
				config
			);
			dispatch(resetPost());
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// update

export const updatePostAction = createAsyncThunk(
	"post/updated",
	async (post, { rejectWithValue, getState, dispatch }) => {
		const user = getState()?.users;
		const { userAuth } = user;

		const config = {
			headers: {
				Authorization: `Bearer ${userAuth?.token}`,
			},
		};

		// http call
		try {
			const { data } = await axios.put(
				`${baseUrl}/api/post/${post?.id}`,
				post,
				config
			);
			dispatch(resetPostEdit());
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// delete
export const deletePostAction = createAsyncThunk(
	"post/delete",
	async (postId, { rejectWithValue, getState, dispatch }) => {
		const user = getState()?.users;
		const { userAuth } = user;

		const config = {
			headers: {
				Authorization: `Bearer ${userAuth?.token}`,
			},
		};

		// http calll
		try {
			const { data } = await axios.delete(
				`${baseUrl}/api/posts/${postId}`,
				config
			);
			dispatch(resetPostDelete());
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// fetch all posts
export const fetchPostsAction = createAsyncThunk(
	"post/list",
	async (category, { rejectWithValue, getState, dispatch }) => {
		// http call
		try {
			const { data } = await axios.get(
				`${baseUrl}/api/posts?category=${category}`
			);
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// fetch post details
export const fetchPostDetailsAction = createAsyncThunk(
	"post/detail",
	async (id, { rejectWithValue, getState, dispatch }) => {
		try {
			const { data } = await axios.get(`${baseUrl}/api/posts/${id}`);
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// Add likes to posts
export const toggleAddLikesToPost = createAsyncThunk(
	"post/like",
	async (postId, { rejectWithValue, getState, dispatch }) => {
		const user = getState()?.users;
		const { userAuth } = user;

		const config = {
			headers: {
				Authorization: `Bearer ${userAuth.token}`,
			},
		};

		try {
			const { data } = await axios.put(
				`${baseUrl}/api/posts/likes`,
				{ postId },
				config
			);
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// add dislikes to post
export const toggleAddDisLikesToPost = createAsyncThunk(
	"post/dislikes",
	async (postId, { rejectWithValue, getState, dispatch }) => {
		const user = getState()?.users;
		const { userAuth } = user;

		const config = {
			headers: {
				Authorization: `Bearer ${userAuth.token}`,
			},
		};

		try {
			const { data } = await axios.put(
				`${baseUrl}/api/posts/dislikes`,
				{ postId },
				config
			);
			return data;
		} catch (error) {
			if (!error?.response) throw error;
			return rejectWithValue(error?.response?.data);
		}
	}
);

// slices
const postSlice = createSlice({
	name: "post",
	initialState: {},
	extraReducers: (builder) => {
		// create post
		builder.addCase(createPostAction.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(resetPost, (state, action) => {
			state.isCreated = true;
		});

		builder.addCase(createPostAction.fulfilled, (state, action) => {
			state.postCreated = action?.payload;
			state.loading = false;
			state.isCreated = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(createPostAction.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.payload?.message;
		});

		// update post
		builder.addCase(updatePostAction.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(resetPostEdit, (state, action) => {
			state.isUpdated = true;
		});

		builder.addCase(updatePostAction.fulfilled, (state, action) => {
			state.postUpdated = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
			state.isUpdated = false;
		});

		builder.addCase(updatePostAction.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});

		//Delete post
		builder.addCase(deletePostAction.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(resetPostDelete, (state, action) => {
			state.isDeleted = true;
		});

		builder.addCase(deletePostAction.fulfilled, (state, action) => {
			state.postUpdated = action?.payload;
			state.isDeleted = false;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;

			window.location.href = "/posts";
		});

		builder.addCase(deletePostAction.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});

		//fetch posts
		builder.addCase(fetchPostsAction.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchPostsAction.fulfilled, (state, action) => {
			state.postLists = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(fetchPostsAction.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});

		//fetch post Details
		builder.addCase(fetchPostDetailsAction.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(fetchPostDetailsAction.fulfilled, (state, action) => {
			state.postDetails = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(fetchPostDetailsAction.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});

		//Likes
		builder.addCase(toggleAddLikesToPost.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(toggleAddLikesToPost.fulfilled, (state, action) => {
			state.likes = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(toggleAddLikesToPost.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});

		//DisLikes
		builder.addCase(toggleAddDisLikesToPost.pending, (state, action) => {
			state.loading = true;
		});

		builder.addCase(toggleAddDisLikesToPost.fulfilled, (state, action) => {
			state.dislikes = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(toggleAddDisLikesToPost.rejected, (state, action) => {
			state.loading = false;
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
		});
	},
});

export default postSlice.reducer;
