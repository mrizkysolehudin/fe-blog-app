import { UploadIcon } from "@heroicons/react/outline";
import React from "react";

const UploadProfilePhoto = () => {
	return (
		<div className="bg-gray-900 min-h-screen">
			<h1 className="text-gray-300 font-extrabold text-3xl text-center pt-44 pb-8">
				Upload profile photo
			</h1>

			<div className="bg-white max-w-lg mx-auto px-12 py-9 rounded-lg">
				<form>
					<input
						type="file"
						placeholder="Click here to select image"
						className="border-2 border-dashed py-6 px-6 w-full border-gray-200 text-gray-300"
					/>
					<p className="pt-6 text-sm text-gray-500 pb-5">
						PNG, JPG, GIF minimum size 400kb uploaded only 1 image
					</p>

					<button className="flex border-2 border-gray-200 w-full justify-center py-[6px] rounded-md">
						<UploadIcon className="w-6 h-6 text-gray-400" />
						<p className="text-gray-800 font-medium text-sm pl-2">
							Upload Photo
						</p>
					</button>
				</form>
			</div>
		</div>
	);
};

export default UploadProfilePhoto;
