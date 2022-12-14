import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersAction } from "redux/slices/users/usersSlices";
import LoadingComponent from "utils/LoadingComponent";
import UserItems from "./UserItems";

const UsersList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);
	const { usersList, loading, appErr, serverErr, block, unblock } = users;

	useEffect(() => {
		dispatch(fetchUsersAction());
	}, [dispatch, block, unblock]);

	return (
		<div className="bg-gray-900 min-h-screen">
			{loading ? (
				<LoadingComponent />
			) : appErr || serverErr ? (
				<p className="text-red-600 text-center mt-40">
					{appErr} {serverErr}
				</p>
			) : usersList?.length <= 0 ? (
				<p className="text-red-600 text-center">No user found</p>
			) : (
				usersList?.map((user) => <UserItems user={user} />)
			)}
		</div>
	);
};

export default UsersList;
