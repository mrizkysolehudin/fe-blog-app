import React from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon, LogoutIcon, PlusIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { logoutAction } from "redux/slices/users/usersSlices";

const PrivateNavbar = ({ isLogin }) => {
	const navigation = [
		{ name: "Home", href: "/", current: true },
		{ name: "Create", href: "/create-post", current: false },
		{ name: "Posts", href: "/posts", current: false },
		{ name: "Profile", href: `/profile/${isLogin._id}`, current: false },
	];

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const dispatch = useDispatch();

	return (
		<nav className="max-w-7xl mx-auto px-8 py-5 bg-gray-800">
			<div className="flex justify-between">
				<section className="flex items-center gap-x-10">
					<span>
						<Link to="/">
							<BookOpenIcon className="h-10 w-10 text-yellow-200" />
						</Link>
					</span>

					<div className="text-white flex gap-x-8 font-semibold">
						{navigation.map((item, index) => (
							<Link
								key={index}
								to={item.href}
								className={classNames(
									item.current
										? "bg-gray-900 white "
										: "text-gray-300  hover:text-white ",
									"px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
								)}>
								{item.name}
							</Link>
						))}
					</div>
				</section>

				<div className="text-white font-semibold flex gap-x-5">
					<Link
						to="/create-post"
						type="button"
						className="flex items-center bg-blue-600 px-4 rounded-lg hover:bg-blue-700">
						<PlusIcon className="w-5 h-5 mr-2" />
						New Post
					</Link>

					<Link
						onClick={() => dispatch(logoutAction())}
						type="button"
						className="flex items-center bg-red-600 px-4 rounded-lg hover:bg-red-700">
						<LogoutIcon className="w-5 h-5 mr-2" />
						<p>Logout</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default PrivateNavbar;
