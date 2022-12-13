import React from "react";
import hisoka from "assets/img/hisoka.jpg";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const CategoryList = () => {
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

					<tbody>
						<tr>
							<td>
								<div className="py-3 flex items-center px-6">
									<img
										src={hisoka}
										className="w-10 h-10 rounded-full"
										alt=""
									/>

									<div className="text-sm ml-4">
										<p className="font-semibold">
											zeus nolimit
										</p>
										<p className="text-gray-600/90">
											zeus nolimit.no1@gmail.com
										</p>
									</div>
								</div>
							</td>
							<td className="text-gray-600/90 text-sm px-7">
								Ruby
							</td>
							<td className="text-gray-600/90 text-sm px-7">
								7 Dec 2022
							</td>
							<td className="px-7">
								<Link to="/update-category/12312">
									<PencilAltIcon className="w-5 h-5 text-indigo-600" />
								</Link>
							</td>
						</tr>

						<tr>
							<td>
								<div className="py-3 flex items-center px-6">
									<img
										src={hisoka}
										className="w-10 h-10 rounded-full"
										alt=""
									/>

									<div className="text-sm ml-4">
										<p className="font-semibold">
											zeus nolimit
										</p>
										<p className="text-gray-600/90">
											zeus nolimit.no1@gmail.com
										</p>
									</div>
								</div>
							</td>
							<td className="text-gray-600/90 text-sm px-7">
								Ruby
							</td>
							<td className="text-gray-600/90 text-sm px-7">
								7 Dec 2022
							</td>
							<td className="px-7">
								<Link to="/update-category/12312">
									<PencilAltIcon className="w-5 h-5 text-indigo-600" />
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</main>
		</div>
	);
};

export default CategoryList;
