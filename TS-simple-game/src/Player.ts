import { playerConfig } from "./config/player.config";
import { dimension, playerStyle } from "./config/types";

export class Player {
	private _size: number;
	private _style: playerStyle | null;
	private _element: HTMLElement | null;
	private _fatherElement: Element | null;
	private _unit: dimension["unit"];

constructor({
    size,
    style,
}: { size: number; style: playerStyle } = playerConfig) {
    this._size = size;
    this._style = style;
    playerConfig.father = playerConfig.researchElement();
    console.log(playerConfig.father);
    this._fatherElement = playerConfig.father;
    this._element = null;
    this._unit = playerConfig.unit as dimension["unit"];
    this.create();
}

	private create(): void {
		this._element = document.createElement("div");
		this._element.id = playerConfig.id;
		this._element.style.width = this._size + playerConfig.unit;
		this._element.style.height = this._size + playerConfig.unit;
		this.setStyle();
		console.log(playerConfig.father + "father");
		if (this._fatherElement) this._fatherElement!.append(this._element);
	}

	setStyle(): void {
		if (this._style) {
			Object.entries(this._style).forEach(([key, value]) => {
				// @ts-ignore
				this._element!.style[key] = value;
			});
		}
	}

	protected get size(): dimension {
		return { num: this._size, unit: this._unit };
	}
}
