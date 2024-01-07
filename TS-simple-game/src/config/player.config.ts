import { arenaConfig } from "./arena.config";

export const playerConfig = {
	size: 10,
	style: {
		backgroundColor: "green",
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: "2px",
	},
	father: document.getElementById(arenaConfig.id),
	id: "player",
	unit: "px",
    researchElement: () => {return document.getElementById(arenaConfig.id)},
};
