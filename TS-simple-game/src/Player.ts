import { playerConfig } from "./config/player.config";
import { dimension, playerStyle, movesCalc, keys } from "./config/types";
import { moveConfig, moves } from "./config/move.config";
import { arenaConfig } from "./config/arena.config";

export class Player {
	private _size: number;
	private _style: playerStyle | null;
	private _element: HTMLElement | null;
	private _fatherElement: Element | null;
	private _unit: dimension["unit"];
	private speed: number;
	private _x: number;
	private _y: number;
	private _loop: any | null;
	private _created: boolean;

	constructor({
		size,
		style,
	}: { size: number; style: playerStyle } = playerConfig) {
		this._size = size;
		this._style = style;
		this._fatherElement = playerConfig.father =
			playerConfig.researchElement();
		this._element = null;
		this._unit = playerConfig.unit as dimension["unit"];
		this.speed = playerConfig.speed;
		this._loop = null;
		this._created = false;
		this._x = 0;
		this._y = 0;
		this.create();
		this.init();
	}

	private create(): void {
		this._element = document.createElement("div");
		this._element.id = playerConfig.id;
		this._element.style.width = this._size + playerConfig.unit;
		this._element.style.height = this._size + playerConfig.unit;
		this.setStyle();
		if (this._fatherElement) this._fatherElement!.append(this._element);
		this._created = true;
	}

	private init(): void {
		const keys: { [key: string]: boolean } = Object.values(
			moveConfig
		).reduce((acc, curr) => {
			curr.buttons.forEach(button => {
				acc[button] = false;
			});
			return acc;
		}, {});

		document.addEventListener("keydown", e => {
			if (e.key in keys) keys[e.key as keyof typeof keys] = true;
		});

		document.addEventListener("keyup", e => {
			if (e.key in keys) keys[e.key as keyof typeof keys] = false;
		});

		this._loop = setInterval(() => {
			this.move(keys);
		}, 10 / this.speed);
	}

	private move(keys: { [key: string]: boolean }): void {
		//Recebe todos os valores de calc das direções que estão sendo pressionadas, evitando que W e Up sejam pressionados ao mesmo tempo.
		const direction = Object.keys(keys).reduce((acc, curr) => {
			if (keys[curr] && !acc.includes(moves[curr])) {
				acc.push(moves[curr]);
			}
			return acc;
		}, [] as string[]);

		//Realiza a movimentação de cada direção que está sendo pressionada.
		Object.entries(moves).forEach(([key, value]) => {
			if (direction && direction.includes(moves[key])) {
				if(this.canMove(value, moves[key])){
					this._element!.style[value.axis] =
					(
						parseInt(this._element!.style[value.axis]) +
						(value.operation === "+" ? 1 : -1)
					).toString() + "px";
				}
			}
		});
	}

	canMove({axis, operation}: movesCalc, direction: keys): boolean{
		const styleSelector = {
			top: "height",
			left: "width"
		}
		const nextPosition = parseInt(this._element!.style[axis]) + (operation === "+" ? 1 : -1);
		if(["up", "left"].includes(direction))
			return nextPosition > 0 && nextPosition < arenaConfig[styleSelector[axis]];
		return nextPosition > 0 && nextPosition < arenaConfig[styleSelector[axis]] - this._size;
	}

	setStyle(): void {
		if (this._style) {
			Object.entries(this._style).forEach(([key, value]) => {
				// @ts-ignore
				this._element!.style[key] = value;
			});
		}
	}

	private start(): void {
		this.init();
	}

	private stop(): void {
		clearInterval(this._loop);
	}

	private destroy(): void {
		this._element!.remove();
		this._created = false;
	}

	public get size(): dimension {
		return { num: this._size, unit: this._unit };
	}

	public get location(): { x: number; y: number } {
		return { x: this._x, y: this._y };
	}

	public get created(): boolean {
		return this._created;
	}
}
