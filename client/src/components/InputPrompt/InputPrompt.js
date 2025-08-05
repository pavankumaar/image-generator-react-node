import React, { useState } from "react";
import "./InputPrompt.css";
import { IoSend } from "react-icons/io5";

const InputPrompt = (props) => {
	const { isLoading } = props;
  return (
		<div className="inputprompt-container">
			<input type="text" placeholder="Enter prompt to generate an image.." onChange={props.handleInputChange}/>
			<button className="send-button" onClick={props.fetchImage} disabled={props.prompt === ""}>
				{isLoading ? <span className="spinner" /> : <IoSend fontSize={20} />}
			</button>
		</div>
	);
};

export default InputPrompt;
