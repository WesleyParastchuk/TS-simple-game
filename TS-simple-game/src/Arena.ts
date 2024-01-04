export default class Arena {
	protected size: Record<string, number> = { "height": 0, "width": 0 };
	protected sizeMultiplier: number = 0.8;

	constructor() {
		this.calculateSize();
	}

	public create() {
		const main = document.querySelector("main") as HTMLElement;
		const arena = document.createElement("div") as HTMLElement;
		arena.classList.add("arena");
		main.appendChild(arena);
	}

	protected delete() {
		const arena = document.querySelector(".arena") as HTMLElement;
		arena.remove();
	}

	protected calculateSize() {
		const main = document.querySelector("main") as HTMLElement;
		this.size.height = main.getBoundingClientRect().height * this.sizeMultiplier;
		this.size.width = main.getBoundingClientRect().width * this.sizeMultiplier;
		console.log(this.size);
	}
}
