class Game {
    private dragon: Dragon;
    private orc: Orc;
    private slime: Slime;
    public damage: number = 0;
    public gold: number = 0;
    public goldsec: number = 0;
    public goldholder: number = 0;
    public goldshower: number = 0;
    private sScreen: StartScreen;
    public monsterhealth: number = 0;
    private menu: Menu;

    constructor() {
        this.slime = new Slime(this); // slime regelt eventlistener en  addDamage
        this.menu = new Menu(this);
        this.monsterhealth = this.slime.health;
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.switcher();
        this.addGold();
        this.showStats();
        requestAnimationFrame(() => this.gameLoop());
    }

    public switcher() {
        if (this.slime != undefined) {
            if (this.slime.health <= 0) {
                console.log("squish");
                this.slime.removeme();
                this.slime = undefined;
                this.orc = new Orc(this);
                this.monsterhealth = this.orc.health;
            }
        }
        if (this.orc != undefined) {
            if (this.orc.health <= 0) {
                console.log("crunch");
                this.orc.removeme();
                this.orc = undefined;
                this.dragon = new Dragon(this);
                this.monsterhealth = this.dragon.health;
            }
        }
        if (this.dragon != undefined){
            if (this.dragon.health <= 0){
                this.dragon.removeme();
                alert("YOU HAVE SUCCESFULLY KILLED THE DRAGON AND THUSLY FINISHED YOUR TRAINING. NOW GO DO HERO STUFF OR SOMETHING...");
            }
        }
    }

    public addDamage() {
        if (this.slime != undefined) {
            if (this.slime.health > 0) {
                this.slime.health -= this.damage;
                this.monsterhealth = this.slime.health;
                this.gold += Math.round(this.damage /2);
            }
        }
        else if (this.orc != undefined) {
            if (this.orc.health > 0) {
                this.orc.health -= this.damage;
                this.monsterhealth = this.orc.health;
                this.gold += Math.round(this.damage /2);
            }
        }
        else if (this.dragon != undefined) {
            if (this.dragon.health > 0) {
                this.dragon.health -= this.damage;
                this.monsterhealth = this.dragon.health;
                this.gold += Math.round(this.damage /2);
            }
        }
    }

    private addGold() {
        this.goldholder += this.goldsec;
        if (this.goldholder >= 24) {
            this.goldholder-= 24;
            this.gold += 24;
        } 
        else if (this.goldholder >= 20) {
            this.goldholder-= 20;
            this.gold += 20;
        } 
        else if (this.goldholder >= 16) {
            this.goldholder-= 16;
            this.gold += 16;
        } 
        else if (this.goldholder >= 12) {
            this.goldholder-= 12;
            this.gold += 12;
        } 
        else if (this.goldholder >= 8) {
            this.goldholder-= 8;
            this.gold += 8;
        } 
        else if (this.goldholder >= 6) {
                this.goldholder -= 6;
                this.gold += 6;
            } 
            else if (this.goldholder >= 4) {
                    this.goldholder -= 4;
                    this.gold += 4;
                } 
                else if (this.goldholder >= 2) {
                        this.goldholder -= 2;
                        this.gold += 2;
                    } 
                    else if (this.goldholder >= 1) {
                            this.goldholder -= 1;
                            this.gold += 1;
                        }
    }

    public showStats() {
        this.goldsec = Item.numSquire /60 + Item.numKnight * 4/60 + Item.numPaladin * 8/60;
        this.goldshower = Item.numSquire + Item.numKnight * 4 + Item.numPaladin * 8;
        this.damage = 1 + Item.useSlimeSword * 2 + Item.useOrcSword * 13 + Item.useDragonSword * 30;

        document.getElementById("health").innerHTML = "<h1>Health: " + Math.floor(this.monsterhealth) + "</h1>";
        document.getElementById("damage").innerHTML = "<h2>" + this.damage + " Damage/click</h2>";
        document.getElementById("gold").innerHTML = "<h2>" + this.gold + " gold</h2>";
        document.getElementById("goldsec").innerHTML = "<h3>" + this.goldshower + " gold/sec</h3>";
    }
}