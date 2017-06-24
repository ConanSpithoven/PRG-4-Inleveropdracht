class Dragon {
    constructor(g) {
        this.health = 15000;
        this.game = g;
        this.div = document.createElement("div");
        this.div.setAttribute("id", "dragon");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", () => this.game.addDamage());
    }
}
class Game {
    constructor() {
        this.damage = 0;
        this.gold = 0;
        this.goldsec = 0;
        this.goldholder = 0;
        this.goldshower = 0;
        this.monsterhealth = 0;
        this.slime = new Slime(this);
        this.menu = new Menu(this);
        this.monsterhealth = this.slime.health;
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.switcher();
        this.addGold();
        this.showStats();
        requestAnimationFrame(() => this.gameLoop());
    }
    switcher() {
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
        if (this.dragon != undefined) {
            if (this.dragon.health <= 0) {
                alert("YOU HAVE SUCCESFULLY KILLED THE DRAGON AND THUSLY FINISHED YOUR TRAINING. NOW GO DO HERO STUFF OR SOMETHING...");
            }
        }
    }
    addDamage() {
        if (this.slime != undefined) {
            if (this.slime.health > 0) {
                this.slime.health -= this.damage;
                this.monsterhealth = this.slime.health;
                this.gold += Math.round(this.damage / 2);
            }
        }
        else if (this.orc != undefined) {
            if (this.orc.health > 0) {
                this.orc.health -= this.damage;
                this.monsterhealth = this.orc.health;
                this.gold += Math.round(this.damage / 2);
            }
        }
        else if (this.dragon != undefined) {
            if (this.dragon.health > 0) {
                this.dragon.health -= this.damage;
                this.monsterhealth = this.dragon.health;
                this.gold += Math.round(this.damage / 2);
            }
        }
    }
    addGold() {
        this.goldholder += this.goldsec;
        if (this.goldholder >= 24) {
            this.goldholder -= 24;
            this.gold += 24;
        }
        else if (this.goldholder >= 20) {
            this.goldholder -= 20;
            this.gold += 20;
        }
        else if (this.goldholder >= 16) {
            this.goldholder -= 16;
            this.gold += 16;
        }
        else if (this.goldholder >= 12) {
            this.goldholder -= 12;
            this.gold += 12;
        }
        else if (this.goldholder >= 8) {
            this.goldholder -= 8;
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
    showStats() {
        this.goldsec = Item.numSquire / 60 + Item.numKnight * 4 / 60 + Item.numPaladin * 8 / 60;
        this.goldshower = Item.numSquire + Item.numKnight * 4 + Item.numPaladin * 8;
        this.damage = 1 + Item.useSlimeSword * 2 + Item.useOrcSword * 13 + Item.useDragonSword * 30;
        document.getElementById("health").innerHTML = "<h1>Health: " + Math.floor(this.monsterhealth) + "</h1>";
        document.getElementById("damage").innerHTML = "<h2>" + this.damage + " Damage/click</h2>";
        document.getElementById("gold").innerHTML = "<h2>" + this.gold + " gold</h2>";
        document.getElementById("goldsec").innerHTML = "<h3>" + this.goldshower + " gold/sec</h3>";
    }
}
class Item {
    constructor(g) {
        this.game = g;
    }
    activateWeapon(theName, theDamage, theCost) {
        if (this.game.gold >= theCost) {
            this.game.gold -= theCost;
            console.log(theName + " with " + theDamage + " damage bought for " + theCost);
            if (theName == "slimesword") {
                Item.useSlimeSword += 1;
                document.getElementById(theName).innerHTML = "[" + Item.useSlimeSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if (theName == "orcsword") {
                Item.useOrcSword += 1;
                document.getElementById(theName).innerHTML = "[" + Item.useOrcSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if (theName == "dragonsword") {
                Item.useDragonSword += 1;
                document.getElementById(theName).innerHTML = "[" + Item.useDragonSword + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
        }
        else {
            let goldText = document.getElementById("gold");
            let switcher = false;
            for (var i = 0; i < 5; i++) {
                let intervalID = setInterval(function () {
                    if (switcher) {
                        goldText.style.color = "gold";
                        switcher = false;
                        clearInterval(intervalID);
                    }
                    else {
                        goldText.style.color = "red";
                        switcher = true;
                    }
                }, 100);
            }
        }
    }
    activateIncome(theName, theIncome, theCost) {
        if (this.game.gold >= theCost) {
            this.game.gold -= theCost;
            console.log(theName + " with " + theIncome + " gold/sec bought for " + theCost);
            if (theName == "squire") {
                Item.numSquire++;
                console.log("got squire");
                document.getElementById(theName).innerHTML = "[" + Item.numSquire + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if (theName == "knight") {
                Item.numKnight++;
                document.getElementById(theName).innerHTML = "[" + Item.numKnight + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
            else if (theName == "paladin") {
                Item.numPaladin++;
                document.getElementById(theName).innerHTML = "[" + Item.numPaladin + "] " + theName.toUpperCase() + "S (" + theCost + "gold)";
            }
        }
        else {
            let goldText = document.getElementById("gold");
            let switcher = false;
            for (var i = 0; i < 5; i++) {
                let intervalID = setInterval(function () {
                    if (switcher) {
                        goldText.style.color = "gold";
                        switcher = false;
                        clearInterval(intervalID);
                    }
                    else {
                        goldText.style.color = "red";
                        switcher = true;
                    }
                }, 100);
            }
        }
    }
}
Item.useSlimeSword = 0;
Item.useOrcSword = 0;
Item.useDragonSword = 0;
Item.numSquire = 0;
Item.numKnight = 0;
Item.numPaladin = 0;
class SlimeSword extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "slimesword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "SLIMESWORD (150 gold)";
        document.getElementById("slimesword").addEventListener("click", () => this.setWeapon());
    }
    setWeapon() {
        super.activateWeapon("slimesword", 2, 150);
    }
}
class OrcSword extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "orcsword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "ORCSWORD (600 gold)";
        document.getElementById("orcsword").addEventListener("click", () => this.setWeapon());
    }
    setWeapon() {
        super.activateWeapon("orcsword", 4, 600);
    }
}
class DragonSword extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "dragonsword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "DRAGONSWORD (1200 gold)";
        document.getElementById("dragonsword").addEventListener("click", () => this.setWeapon());
    }
    setWeapon() {
        super.activateWeapon("dragonsword", 6, 1200);
    }
}
class Squire extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "squire");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "SQUIRE (75 gold)";
        document.getElementById("squire").addEventListener("click", () => this.setIncome());
    }
    setIncome() {
        console.log("buying squire...");
        super.activateIncome("squire", 1, 75);
    }
}
class Knight extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "knight");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "KNIGHT (225 gold)";
        document.getElementById("knight").addEventListener("click", () => this.setIncome());
    }
    setIncome() {
        super.activateIncome("knight", 4, 225);
    }
}
class Paladin extends Item {
    constructor(g) {
        super(g);
        let li = document.createElement("li");
        li.setAttribute("id", "paladin");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "PALADIN (400 gold)";
        document.getElementById("paladin").addEventListener("click", () => this.setIncome());
    }
    setIncome() {
        super.activateIncome("paladin", 8, 400);
    }
}
window.addEventListener("load", function () {
    new StartScreen();
});
class Menu {
    constructor(g) {
        this.game = g;
        this.items = new Item(this.game);
        let WeaponList = document.createElement("ul");
        WeaponList.setAttribute("id", "weaponlist");
        document.getElementById("weaponmenu").appendChild(WeaponList);
        let IncomeList = document.createElement("ul");
        IncomeList.setAttribute("id", "incomelist");
        document.getElementById("weaponmenu").appendChild(IncomeList);
        let Slimesword = new SlimeSword(this.game);
        let Orcsword = new OrcSword(this.game);
        let Dragonsword = new DragonSword(this.game);
        let squire = new Squire(this.game);
        let knight = new Knight(this.game);
        let paladin = new Paladin(this.game);
    }
}
class Orc {
    constructor(g) {
        this.health = 3000;
        this.game = g;
        this.div = document.createElement("div");
        this.div.setAttribute("id", "orc");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", () => this.game.addDamage());
    }
    removeme() {
        this.div.remove();
    }
}
class Slime {
    constructor(g) {
        this.health = 750;
        this.game = g;
        this.div = document.createElement("div");
        this.div.setAttribute("id", "slime");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", () => this.game.addDamage());
    }
    removeme() {
        this.div.remove();
    }
}
class StartScreen {
    constructor() {
        this.background = document.createElement("div");
        document.body.appendChild(this.background);
        this.background.setAttribute("id", "startScreen");
        let inside = document.createElement("div");
        this.background.appendChild(inside);
        this.background.setAttribute("id", "startScreenInside");
        inside.innerHTML = "<h3>Hero Trainer</h3><h4>A training program to being a hero</h4>";
        this.button = document.createElement("button");
        inside.appendChild(this.button);
        this.button.setAttribute("id", "button");
        this.button.innerHTML = "Start Game";
        this.button.addEventListener("click", () => this.startGame());
    }
    startGame() {
        this.button.remove();
        this.background.remove();
        new Game;
    }
}
//# sourceMappingURL=main.js.map
