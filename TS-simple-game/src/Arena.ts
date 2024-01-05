import { arenaConfig } from "./config/arena.config";
import { ArenaStyle, dimension } from "./types";

export class Arena {
	private _width: number;
	private _height: number;
	private _style: ArenaStyle | null;
	private _element: HTMLElement | null;
	private _fatherElement: HTMLElement | null;
	private _unit: dimension["unit"];

	constructor({
		width,
		height,
		style,
	}: {
		width: number;
		height: number;
		style: ArenaStyle;
	} = arenaConfig) {
		this._width = width;
		this._height = height;
		this._style = style;
		this._fatherElement = arenaConfig.father;
		this._element = null;
		this._unit = arenaConfig.unit as dimension["unit"];
		this.create();
	}

	private create(): void {
		this._element = document.createElement("div");
		this._element.id = arenaConfig.id;
		this._element.style.width = this._width + this._unit;
		this._element.style.height = this._height + this._unit;
		this.setStyle();
		this._fatherElement!.appendChild(this._element);
	}

	setStyle(): void {
		if (this._style) {
			Object.entries(this._style).forEach(([key, value]) => {
				// @ts-ignore
				this._element!.style[key] = value;
			});
		}
	}

	protected get width(): dimension {
		return { num: this._width, unit: this._unit };
	}

	protected get height() {
		return { num: this._height, unit: this._unit };
	}
}
