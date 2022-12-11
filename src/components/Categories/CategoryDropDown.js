import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fetchCategoriesAction } from "redux/slices/category/categorySlice";

const CategoryDropDown = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesAction());
	}, [dispatch]);

	const category = useSelector((state) => state.category);
	const { categoryList, loading } = category;

	const allCategories = categoryList?.map((category) => {
		return {
			label: category?.title,
			value: category?._id.toString(),
		};
	});

	const handleChange = (value) => {
		props.onChange("category", value.value);
	};

	const handleBlur = () => {
		props.onBlur("category", true);
	};

	return (
		<div>
			{loading ? (
				<h3 className="text-green-600">
					Product categories list are loading please wait...
				</h3>
			) : (
				<Select
					onChange={handleChange}
					onBlur={handleBlur}
					id="category"
					options={allCategories}
					value={props?.value}
				/>
			)}

			{props?.error && <p className="text-red-500">{props?.error}</p>}
		</div>
	);
};

export default CategoryDropDown;
