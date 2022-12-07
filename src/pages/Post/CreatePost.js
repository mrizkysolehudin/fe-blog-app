import React from "react";
import styled from "styled-components";

function CreatePost() {
	const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
border-color:'red'
  transition: border 0.24s ease-in-out;
`;

	return (
		<div className="bg-gray-900 min-h-screen">
			<section className="max-w-md w-full mx-auto pt-14 text-center">
				<h1 className="text-3xl font-extrabold text-gray-300 mb-2">
					Create Post
				</h1>
				<p className="text-green-600 text-sm">
					Share your ideas to the word. Your post must be free from
					profanity
				</p>
			</section>

			<section className="bg-white max-w-lg mx-auto mt-8 rounded-lg py-8 px-2">
				<form>
					<div className="flex flex-col max-w-sm mx-auto">
						<label htmlFor="title" className="text-sm">
							Title
						</label>
						<input
							type="text"
							name="title"
							value=""
							placeholder="masukkan judul"
							className="border border-gray-300 rounded-md px-4 py-2 mt-2 mb-4"
						/>

						<label htmlFor="category" className="text-sm">
							Select Category
						</label>
						<input
							type="text"
							name="category"
							list="cityname"
							defaultValue="babat"
							className="border border-gray-300 rounded-md px-4 py-2 mt-2 mb-4"
						/>
						<datalist id="cityname">
							<option value="batu"></option>
							<option value="batscu"></option>
						</datalist>
					</div>

					<div className="flex flex-col max-w-sm mx-auto">
						<label htmlFor="description" className="text-sm">
							Description
						</label>
						<textarea
							name="description"
							id="description"
							cols="4"
							rows="5"
							className="border border-gray-300 rounded-md px-4 py-2 mt-2 mb-4"></textarea>

						<label htmlFor="image">Select image to upload</label>
						<Container className="mt-2 mb-4">
							<input type="file" />
						</Container>
					</div>

					<div className="max-w-sm mx-auto">
						<button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-md font-bold text-white">
							Create
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}

export default CreatePost;
