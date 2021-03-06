class StartScreen{

    private background : HTMLElement;
    private game : Game;
    private button: HTMLElement;
    constructor(){

        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");

        let inside = document.createElement("div");
        this.background.appendChild(inside);
        this.background.setAttribute("id", "startScreenInside");

        inside.innerHTML = "<h3>Hero Trainer</h3><h4>A training program to being a hero</h4>"
        
        this.button = document.createElement("button");
        inside.appendChild(this.button);
        this.button.setAttribute("id", "button");
        this.button.innerHTML = "Start Game";
        this.button.addEventListener("click", () => this.startGame());
    }

    private startGame(){
        this.button.remove();
        this.background.remove();
        new Game;
    }
}
