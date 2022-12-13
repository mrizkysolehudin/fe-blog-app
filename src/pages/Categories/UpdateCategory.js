import { BookOpenIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";

export const UpdateCategory = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<main className="max-w-md mx-auto text-center pt-44">
				<div>
					<div className="w-12 mx-auto">
						<BookOpenIcon className="w-12 h-12" />
					</div>
					<h1 className="text-3xl font-extrabold mt-5">
						Update Category
					</h1>
					<p className="mt-2 text-indigo-600 font-medium text-sm">
						These are the categories user will select when creating
						a post
					</p>
				</div>

				<form className="mt-8">
					<input
						type="text"
						placeholder="New Category"
						className="border border-gray-300 w-full py-2 placeholder:text-center px-3 rounded-md"
					/>

					<div className="mt-6  w-full py-2 px-2 bg-orange-400 hover:bg-indigo-700 rounded-md">
						<PlusCircleIcon className="w-6 h-6 text-yellow-400/70 absolute" />
						<button className="text-white font-medium text-sm">
							Update Category
						</button>
					</div>

					<div className="">
						<button className="mt-2  w-full py-2 px-2 bg-red-600 hover:bg-indigo-700 rounded-md text-white font-medium text-sm">
							Delete Category
						</button>
					</div>
				</form>
			</main>
		</div>
	);
};
