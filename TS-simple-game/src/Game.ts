import Arena from "./Arena.ts";

export default class Game {
    private arena:Arena;

    constructor() {
        this.arena = new Arena();
        this.arena.create();
    }

    public start() {
        this.arena.create();
    }
}
