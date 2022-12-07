import { data } from "autoprefixer";
import React from "react";

function PostsList() {
	const datas = [
		[{ title: "CATEGORIES", desc: "Network Error" }],
		{ status: 500 },
	];

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="max-w-5xl w-full flex justify-between mx-10 pt-20 pb-18">
				<div>
					<p className="text-green-600 font-semibold">
						Latest Posts from our awesome authors
					</p>
					<h1 className="text-gray-300 text-5xl font-bold">
						Latest Post
					</h1>
				</div>

				<div>
					<button className="text-white bg-green-700 font-bold rounded-lg rounded-r-none rounded-t-lg py-3 px-7 mr-6 mt-2">
						View All Posts
					</button>
				</div>
			</section>

			<section className="flex flex-wrap gap-x-5 mx-10 mt-16">
				{datas[0].map((item, index) => (
					<>
						<div
							key={index}
							className="bg-gray-600 rounded-md px-6 py-4 flex flex-col justify-between gap-y-5 h-24 w-56">
							<h3 className="text-gray-400/50 font-bold">
								{item.title}
							</h3>
							<p>{item.desc}</p>
						</div>
					</>
				))}
				{datas[1].status === 500 && (
					<div className="text-orange-400 text-lg flex mx-auto">
						Network Error
					</div>
				)}
			</section>

			<section className="mt-80 pt-7">
				<div className="bg-gray-900">
					<div class="skew bg-green-500 skew-bottom mr-for-radius">
						<svg
							class="h-8 md:h-12 lg:h-10 w-full text-gray-900"
							viewBox="0 0 10 10"
							preserveAspectRatio="none">
							<polygon
								fill="currentColor"
								points="0 0 10 0 0 10"></polygon>
						</svg>
					</div>
					<div class="skew bg-gray-500  skew-bottom ml-for-radius">
						<svg
							class="h-8 bg-gray-500 md:h-12 lg:h-20 w-full text-gray-900"
							viewBox="0 0 10 10"
							preserveAspectRatio="none">
							<polygon
								fill="currentColor"
								points="0 0 10 0 10 10"></polygon>
						</svg>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PostsList;
