export type dimension = {
	num: number;
	unit: "px" | "rem" | "em" | "%";
};

export type ArenaStyle = {
	backgroundColor: string;
	borderColor: string;
	borderStyle: string;
	borderWidth: string;
};

export type playerStyle = {
	backgroundColor: string;
	borderColor: string;
	borderStyle: string;
	borderWidth: string;
	position: string;
	top: string;
	left: string;
};

export type arenaConfigType = {
	width: number;
	height: number;
	style: ArenaStyle;
	father: Element | null;
	id: string;
	unit: dimension["unit"];
};

export type playerConfigType = {
	size: number;
	speed: number;
	style: playerStyle;
	father: Element | null;
	id: string;
	unit: dimension["unit"];
	researchElement: () => Element | null;
};

export type moveConfigType = {
	[key in "up" | "down" | "left" | "right"]: {
		buttons: directionButtons[];
		calc: movesCalc;
	};
};

export type directionButtons =
	| "ArrowUp"
	| "ArrowDown"
	| "ArrowLeft"
	| "ArrowRight"
	| "w"
	| "s"
	| "a"
	| "d";

export type movesCalc = {
	axis: "top" | "left";
	operation: "+" | "-";
};