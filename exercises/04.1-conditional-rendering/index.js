import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	//your component here

	if (getRandomint == 0) {
		return (
			<div className="alert alert-danger" role="alert">
				this is a primary primary alert—check it out!
			</div>
		);
	} else {
		return (
			<div className="alert alert-danger" role="alert">
				this is a primary primary alert—check it out!
			</div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);

function getRandomint(a, b) {
	var randomNumber = Math.floor(Math.randon() * 2+1);
	return randomNumber;
}
