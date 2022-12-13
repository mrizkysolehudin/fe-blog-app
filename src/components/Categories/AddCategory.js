import { BookOpenIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";

const AddCategory = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<main className="max-w-xl mx-auto pt-48">
				<div className="text-center">
					<div className="w-14 mx-auto">
						<BookOpenIcon className="w-12 h-12 text-gray-900 text-center " />
					</div>
					<h3 className="text-3xl font-extrabold mt-5">
						Add New Category
					</h3>
					<p className="text-indigo-600 font-semibold text-sm mt-2">
						These are the categories user will select when creating
						a post
					</p>
				</div>

				<form className="flex flex-col">
					<input
						type="text"
						placeholder="New category"
						className="border border-gray-300 placeholder:text-gray-500 mt-8 placeholder:text-center py-2 rounded-md px-3"
					/>
					<div>
						<button className="w-full bg-indigo-600 py-2 px-3 rounded-md mt-4">
							<PlusCircleIcon className="w-6 h-6 text-orange-400 absolute" />
							<p className="text-white font-medium">
								Add new category
							</p>
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};

export default AddCategory;
