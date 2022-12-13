import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon, LogoutIcon, PlusIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { logoutAction } from "redux/slices/users/usersSlices";
import { Menu, Transition } from "@headlessui/react";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Create", href: "/create-post", current: false },
	{ name: "Posts", href: "/posts", current: false },
	{ name: "Authors", href: `/users`, current: false },
	{ name: "Add Category", href: `/add-category`, current: false },
	{ name: "Category List", href: `/category-list`, current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const AdminNavbar = ({ isLogin }) => {
	const userNavigation = [
		{ name: "Your Profile", href: `/profile/${isLogin._id}` },
		{ name: "Settings", href: "/update-password" },
	];

	const dispatch = useDispatch();

	return (
		<nav className="max-w-7xl mx-auto px-8 py-4 bg-green-800">
			<div className="flex justify-between">
				<section className="flex items-center gap-x-10">
					<span>
						<Link to="/">
							<BookOpenIcon className="h-10 w-10 text-yellow-200" />
						</Link>
					</span>

					<div className="text-white flex gap-x-4 font-semibold">
						{navigation.map((item, index) => (
							<Link
								key={index}
								to={item.href}
								className={classNames(
									item.current
										? "bg-gray-900 white "
										: "text-gray-300  hover:text-white ",
									"px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
								)}>
								{item.name}
							</Link>
						))}
					</div>
				</section>

				<section className="text-white font-semibold flex gap-x-5 items-center">
					<div>
						<Link
							to="/create-post"
							type="button"
							className="flex items-center bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700">
							<PlusIcon className="w-5 h-5 mr-2" />
							New Post
						</Link>
					</div>
					<div>
						<Link
							onClick={() => dispatch(logoutAction())}
							type="button"
							className="flex items-center bg-red-600 px-4 py-1 rounded-lg hover:bg-red-700">
							<LogoutIcon className="w-5 h-5 mr-2" />
							<p>Logout</p>
						</Link>
					</div>

					<div className="flex-shrink-0 flex items-center">
						{/* Profile dropdown */}
						<Menu as="div" className="relative z-10">
							{({ open }) => (
								<>
									<div>
										<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">
												Open user menu
											</span>
											<img
												className="h-10 w-10 rounded-full border-2 border-white"
												src={isLogin?.profilePhoto}
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										show={open}
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95">
										<Menu.Items
											static
											className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											{userNavigation.map((item) => (
												<Menu.Item key={item.name}>
													{({ active }) => (
														<Link
															to={item.href}
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"block px-4 py-2 text-sm text-gray-700"
															)}>
															{item.name}
														</Link>
													)}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</>
							)}
						</Menu>
					</div>
				</section>
			</div>
		</nav>
	);
};

export default AdminNavbar;
