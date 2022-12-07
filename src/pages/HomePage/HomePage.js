import React from "react";
import poster1 from "assets/img/poster1.png";

function HomePage() {
	return (
		<div className="bg-gray-800 h-screen">
			<main className="flex max-w-7xl mx-auto pt-20">
				<div className="relative w-full mx-10">
					<p className="font-bold text-blue-400 text-lg mb-12">
						Create posts to educate
					</p>

					<h1 className="text-white font-bold text-6xl w-2xl">
						Pen down your ideas{" "}
						<span className="text-yellow-500">
							By creating a post
						</span>
					</h1>

					<p className="text-gray-200 text-xl mt-12">
						Your post must be free from racism and unhealty words
					</p>

					<button className="bg-blue-500 py-5 px-10 rounded-full font-bold text-lg text-white mt-16 hover:bg-blue-600">
						Buy This Course
					</button>
				</div>

				<section className="relative">
					<img
						className="relative -mt-10 -ml-20"
						src={poster1}
						alt="poster"
					/>
				</section>
			</main>
		</div>
	);
}

export default HomePage;
