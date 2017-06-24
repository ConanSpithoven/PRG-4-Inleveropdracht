class Slime {
    private div: HTMLElement;
    private game: Game;
    public health: number = 750;

    constructor(g: Game) {
        this.game = g;
        this.div = document.createElement("div");
        this.div.setAttribute("id", "slime");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", () => this.game.addDamage());
    }
    public removeme() {
        this.div.remove();
    }
}