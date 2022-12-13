import React from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesAction } from "redux/slices/category/categorySlice";
import DateFormatter from "utils/DateFormatter";
import LoadingComponent from "utils/LoadingComponent";

const CategoryList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAction());
	}, [dispatch]);

	const category = useSelector((state) => state.category);
	const { categoryList, loading, appErr, serverErr } = category;

	return (
		<div>
			<main>
				<table className="min-w-full divide-y divide-gray-300 bg-gray-50">
					<thead>
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-sm tracking-wider font-medium text-left text-gray-500">
								AUTHOR
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-sm tracking-wider font-medium text-left text-gray-500">
								TITLE
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-sm tracking-wider font-medium text-left text-gray-500">
								CREATED AT
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-sm tracking-wider font-medium text-left text-gray-500">
								EDIT
							</th>
						</tr>
					</thead>

					{appErr || serverErr ? (
						<p className="text-center text-red-600 mt-20">
							{appErr} {serverErr}
						</p>
					) : loading ? (
						<LoadingComponent />
					) : categoryList?.length <= 0 ? (
						<p className="text-center mt-20">No category found</p>
					) : (
						<tbody>
							{categoryList?.map((category, index) => (
								<tr key={index} className="hover:bg-gray-100">
									<td>
										<div className="py-3 flex items-center px-6">
											<img
												src={
													category?.user?.profilePhoto
												}
												className="w-10 h-10 rounded-full"
												alt=""
											/>

											<div className="text-sm ml-4">
												<p className="font-semibold">
													{category?.user?.firstName +
														" " +
														category?.user
															?.lastName}
												</p>
												<p className="text-gray-600/90">
													{category?.user?.email}
												</p>
											</div>
										</div>
									</td>
									<td className="text-gray-600/90 text-sm px-7">
										{category.title}
									</td>
									<td className="text-gray-600/90 text-sm px-7">
										<DateFormatter
											date={category?.createdAt}
										/>
									</td>
									<td className="px-7">
										<Link
											to={`/update-category/${category?._id}`}>
											<PencilAltIcon className="w-5 h-5 text-indigo-600 hover:bg-gray-300 " />
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
			</main>
		</div>
	);
};

export default CategoryList;
