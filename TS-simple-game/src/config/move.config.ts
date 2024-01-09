import { directionButtons, moveConfigType, movesCalc } from "./types";

export const moveConfig: moveConfigType = {
	up: {
		buttons: ["ArrowUp", "w"],
		calc: {
			axis: "top",
			operation: "-",
		},
	},
	down: {
		buttons: ["ArrowDown", "s"],
		calc: {
			axis: "top",
			operation: "+",
		},
	},
	left: {
		buttons: ["ArrowLeft", "a"],
		calc: {
			axis: "left",
			operation: "-",
		},
	},
	right: {
		buttons: ["ArrowRight", "d"],
		calc: {
			axis: "left",
			operation: "+",
		},
	},
};

export const moves: { [key in directionButtons]: movesCalc } = {
	ArrowUp: moveConfig.up.calc,
	ArrowDown: moveConfig.down.calc,
	ArrowLeft: moveConfig.left.calc,
	ArrowRight: moveConfig.right.calc,
	w: moveConfig.up.calc,
	s: moveConfig.down.calc,
	a: moveConfig.left.calc,
	d: moveConfig.right.calc,
} as { [key in directionButtons]: movesCalc };
