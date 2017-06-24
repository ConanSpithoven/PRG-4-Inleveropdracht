class Menu{
    items : Item;
    private game : Game;

    constructor(g:Game){
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