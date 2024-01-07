import { arenaConfigType } from "./types";

export const arenaConfig: arenaConfigType = {
	width: 800,
	height: 600,
	style: {
		backgroundColor: "white",
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: "2px",
	},
	father: document.querySelector("main"),
	id: "arena",
	unit: "px",
};
