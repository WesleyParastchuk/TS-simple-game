import { playerConfigType } from "./types";
import { arenaConfig } from "./arena.config";

export const playerConfig: playerConfigType = {
	size: 15,
	speed: 1,
	style: {
		backgroundColor: "green",
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: "2px",
		position: "relative",
		top: "0px",
		left: "0px",
	},
	father: document.getElementById(arenaConfig.id),
	id: "player",
	unit: "px",
	researchElement: () => {
		return document.getElementById(arenaConfig.id);
	},
};
