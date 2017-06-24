/// <reference path="item.ts"/>

class SlimeSword extends Item{

    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "slimesword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "SLIMESWORD (150 gold)";
        document.getElementById("slimesword").addEventListener("click", ()=> this.setWeapon());
    }

    private setWeapon(){
        super.activateWeapon("slimesword",2 ,  150);
    }
}

class OrcSword extends Item{
    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "orcsword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "ORCSWORD (600 gold)";
        document.getElementById("orcsword").addEventListener("click", () => this.setWeapon());
    }
    private setWeapon(){
        super.activateWeapon("orcsword",4, 600);
    }
}

class DragonSword extends Item{
    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "dragonsword");
        document.getElementById("weaponlist").appendChild(li);
        li.innerHTML = "DRAGONSWORD (1200 gold)";
        document.getElementById("dragonsword").addEventListener("click", () => this.setWeapon());
    }
    private setWeapon(){
        super.activateWeapon("dragonsword",6,  1200);
    }
}

class Squire extends Item{
    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "squire");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "SQUIRE (75 gold)";
        document.getElementById("squire").addEventListener("click", () => this.setIncome());
    }
    private setIncome(){
        console.log("buying squire...");
        super.activateIncome("squire", 1, 75);
    }
}

class Knight extends Item{
    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "knight");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "KNIGHT (225 gold)";
        document.getElementById("knight").addEventListener("click", () => this.setIncome());
    }
    private setIncome(){
        super.activateIncome("knight",4 , 225);
    }
}

class Paladin extends Item{
    constructor(g:Game){
        super(g);

        let li = document.createElement("li");
        li.setAttribute("id", "paladin");
        document.getElementById("incomelist").appendChild(li);
        li.innerHTML = "PALADIN (400 gold)";
        document.getElementById("paladin").addEventListener("click", () => this.setIncome());
    }
    private setIncome(){
        super.activateIncome("paladin", 8, 400);
    }
}