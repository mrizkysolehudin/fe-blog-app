import React from "react";
import RiseLoader from "react-spinners/CircleLoader";

const override = {
	position: "absolute",
	left: "50%",
	top: "50%",
};

const LoadingComponent = () => {
	return <RiseLoader color="red" loading={true} cssOverride={override} />;
};

export default LoadingComponent;
