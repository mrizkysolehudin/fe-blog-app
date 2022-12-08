import React from "react";
import hisoka from "assets/img/hisoka.jpg";
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function PostsList() {
	const datas = [
		[
			{ title: "CATEGORIES", desc: "Network Error" },
			{ title: "CATEGORIES", desc: "Network Error" },
		],
		[{ title: "Ruby" }, { title: "Go lang" }, { title: "JavaScript" }],
		{
			post: [
				{
					name: "Lucif Chrollo",
					event: "Pelatihan Ruby",
					image: `${hisoka}`,
					desc: "Diselenggarakan untuk umum.",
					date: "8 Dec 2022",
				},
				{
					name: "Lucif Chrollo",

					event: "Seminar",
					image: `${hisoka}`,
					desc: "",
					date: "8 Dec 2022",
				},
			],
		},
		{ status: 200 },
	];

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="max-w-6xl w-full flex justify-between mx-10 pt-20 pb-18">
				<div>
					<p className="text-green-600 font-semibold">
						Latest Posts from our awesome authors
					</p>
					<h1 className="text-gray-300 text-5xl font-bold">
						Latest Post
					</h1>
				</div>

				<div>
					<button className="text-white bg-green-700 font-bold rounded-lg rounded-r-none rounded-t-lg py-3 px-7 mt-2">
						View All Posts
					</button>
				</div>
			</section>

			<section className="flex flex-wrap gap-x-5 mx-10 mt-16">
				{datas[3].status === 500 &&
					datas[0].map((item, index) => (
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
				{datas[3].status === 500 && (
					<div className="text-orange-400 text-lg flex mx-auto">
						Network Error
					</div>
				)}
			</section>

			<section className="mx-10 flex">
				<div className="bg-gray-600 min-w-[240px] w-[280px] h-fit px-5 pt-5 pb-8 rounded-md mr-4">
					<h3 className="text-gray-500 font-bold pb-4">CATEGORIES</h3>

					<div className=" flex flex-col gap-y-4">
						{datas[3].status === 200 &&
							datas[1].map((item, index) => (
								<p
									key={index}
									className="bg-gray-500 py-[7px] text-yellow-600 font-bold rounded-md px-3">
									{item.title}
								</p>
							))}
					</div>
				</div>

				<div className="space-y-7">
					{datas[3].status === 200 &&
						datas[2].post.map((item, index) => (
							<article key={index} className="flex">
								<div>
									<img
										src={item.image}
										className="w-60 h-[275px] rounded-t-md"
										alt=""
									/>
									<div className="bg-white flex items-center py-1 justify-evenly">
										<ThumbUpIcon className="w-8 h-8 text-gray-600" />
										<p className="-ml-3">0</p>
										<ThumbDownIcon className="w-8 h-8 text-gray-600" />
										<p className="-ml-3">0</p>
										<EyeIcon className="w-8 h-8 text-gray-400/70" />
										<p className="-ml-3">0</p>
									</div>
								</div>

								<div className="ml-2">
									<div>
										<h3 className="text-green-400 font-bold text-2xl pb-1">
											{item.event}
										</h3>
										<p className="text-gray-200">
											{item.desc}
										</p>
										<Link
											to={1}
											className="text-indigo-500">
											Read More..
										</Link>
									</div>

									<div className="mt-6 flex">
										<img
											src={item.image}
											className="w-12 h-12 rounded-full"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-yellow-500 text-sm font-semibold">
												{item.name}
											</p>
											<p className="text-green-600">
												{item.date}
											</p>
										</div>
									</div>
								</div>
							</article>
						))}
				</div>
			</section>

			<section className="mt-32">
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
