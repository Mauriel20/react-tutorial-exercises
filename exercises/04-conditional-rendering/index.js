import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Alert = props => {
	//add the condition inside this function

	if (props.show === false) {
		return null;
	} else {
		return (
			<div className="alert alert-danger" role="alert">
				This is a primary alert-check it out!
			</div>
		);
	}
};
/*
    <div className="alert alert-danger" role="alert">
            This is a primary alert-check it out!
        </div>
*/
Alert.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} text="This is a primary alert-check it out!" />
		<Alert show={false} text="This is a primary alert-check it out!" />
	</div>,
	document.querySelector("#myDiv")
);
